import { decodeOBJ, encodeOBJ } from '../middlewares/crypto';
import { MARK_OTP_AS_VERIFIED, OTP_FIND_BY_ID } from '../types/auth/otp';
import { UserLoginRequest, UserLoginResponse, UserLogoutRequest, UserLogoutResponse, UserSignUpRequest, UserSignUpResponse, VerifyOtpRequest, VerifyOtpResponse } from '../types/auth/trigger';
import { TypedRequest, TypedResponse } from '../types/express.types';
import date from '../utils/date';
import { getAuth, sendEmailVerification } from "firebase/auth"
import { createUserWithEmailAndPassword, findUserByEmail } from '../database/users/user';
import { isPasswordStrong } from '../utils/utils';
import { createUserLogin, findAndUpdateAllTokenAsDeleted } from '../database/login/user.login';
import { v4 as uuidv4 } from 'uuid';
import { sign } from 'jsonwebtoken';
import { config } from '../configs/env.config';
import { compare, hash } from 'bcrypt';

export const handleUserSignUp = async (req: TypedRequest<UserSignUpRequest>, res: TypedResponse<UserSignUpResponse>) => {
  try {
    if ("email" in req.body) {
      const user = await findUserByEmail(req.body.email);
      console.log("reached here")
      if (user)
        res.json({ error_code: "EMAIL_ALREADY_IN_USE", description: "Some error Occurred" });
      else if (!isPasswordStrong(req.body.password))
        res.json({ error_code: "PASSWORD_TOO_WEAK", description: "Some error Occurred" });
      else {
        const encryptedPassword = await hash(req.body.password, 10);
        const newUser = await createUserWithEmailAndPassword(req.body.email, encryptedPassword, req.body.firstName, req.body.lastName);
        // sendEmailToNewUser
        console.log(newUser)
        const userIP = (req.headers["x-forwarded-for"] || "").toString();
        // await findAndUpdateAllTokenAsDeleted({
        //   userId: newUser.user_id,
        //   ipAddress: userIP,
        //   device: req.headers["user-agent"],
        // });
        const tokenId = uuidv4();
        await createUserLogin({
          device: req.headers["user-agent"] ?? "",
          tokenId: tokenId,
          userEmail: newUser.email,
          ipAddress: userIP,
        })
        const userToken = {
          email: newUser.email,
          // id: newUser.user_id, 
          tokenId: tokenId
        };
        const accessToken = sign(userToken, config.secret_key)
        res.json({ status: "USER_CREATED_SUCCESSFULLY", authToken: accessToken })
      }
    } else
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred 1" });
  } catch (error) {
    console.log(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred 2" });
  }
}


export const handleLogin = async (req: TypedRequest<UserLoginRequest>, res: TypedResponse<UserLoginResponse>) => {
  try {
    console.log(req.body.email)
    console.log("email" in req.body)
    if ("email" in req.body) {
      const user = await findUserByEmail(req.body.email)
      const password = await compare(req.body.password, user!.password)
      console.log(user);
      console.log(password);
      if (user && password) {
        const userIP = (req.headers["x-forwarded-for"] || "").toString();
        // await findAndUpdateAllTokenAsDeleted({
        //   userId: newUser.user_id,
        //   ipAddress: userIP,
        //   device: req.headers["user-agent"],
        // });
        const tokenId = uuidv4();
        await createUserLogin({
          device: req.headers["user-agent"] ?? "",
          tokenId: tokenId,
          userEmail: user.email,
          ipAddress: userIP,
        })
        const userToken = {
          // id: newUser.user_id, 
          tokenId: tokenId,
          email: user.email,
        };
        const accessToken = sign(userToken, config.secret_key)
        res.json({ status: "USER_LOGGED_IN", authToken: accessToken, user: user })
      }
      else {

        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred 0" });
      }
    } else {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred 1" });
    }
  } catch (error) {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}

export const handleLogout = async (_req: TypedRequest<UserLogoutRequest> , res: TypedResponse<UserLogoutResponse>) => {
  res.json({status: "USER_LOGGED_OUT"})
}


export const handleVerification = async (req: TypedRequest<VerifyOtpRequest>, res: TypedResponse<VerifyOtpResponse>) => {
  try {
    let currentDate = new Date();
    const { token, otp, email, phone_number } = req.body;

    const decodededToken = await decodeOBJ(token);
    console.log(decodededToken);
    const OTP_DB = await OTP_FIND_BY_ID(decodededToken.id);

    if (decodededToken && decodededToken.email && (email !== null || email !== undefined) && decodededToken.email != email)
      res.json({ error_code: "INCORRECT_EMAIL_PROVIDED", description: "Token email not same as email id provided" })

    else if (decodededToken && decodededToken.phone_number && (phone_number !== null || phone_number !== undefined) && decodededToken.phone_number != phone_number)
      res.json({ error_code: "INCORRECT_PHONE_PROVIDED", description: "Token phone not same as phone provided" })

    else if (OTP_DB === null) // || typeof OTP_DB == null
      res.json({ error_code: "BAD_OTP_REQUEST", description: "OTP not triggered for this email ID or Phone Number" })

    else if (OTP_DB.otp != otp)
      res.json({ error_code: "INVALID_OTP", description: "Wrong OTP Entered" })

    else if (OTP_DB.verified)
      res.json({ error_code: "INVALID_OTP", description: "OTP already veryfied" })

    else if (date.compare(OTP_DB.expirationTime, currentDate) !== 1)
      res.json({ error_code: "OTP_EXPIRED", description: "Otp is expired " })

    else {
      await MARK_OTP_AS_VERIFIED(OTP_DB);
      res.json({ status: "SUCCESS", verified: true });
    }

  } catch (error) {
    console.log(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}




// export const handlerAuthentication = async (req: TypedRequest<TriggerOtpRequest>, res: TypedResponse<TriggerOtpResponse>) => {
//   try {
//     const auth = getAuth();
//     if ("email" in req.body) {
//       await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
//         .catch((error: FirebaseError) => {
//           if (error.code === 'auth/email-already-in-use')
//             res.json({ error_code: "EMAIL_ALREADY_IN_USE", description: "Some error Occurred" });
//           else if (error.code === 'auth/weak-password')
//             res.json({ error_code: "PASSWORD_TOO_WEAK", description: "Some error Occurred" });
//           else if (error.code === 'invalid-email')
//             res.json({ error_code: "INVALID_EMAIL", description: "Some error Occurred" });
//           else res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred while creating user1" });
//         })
//       try {
//         if (auth.currentUser) {
//           await sendEmailVerification(auth.currentUser)
//           res.json({ status: "EMAIL_SENT_SUCCESSFULL" })
//         }
//         else
//           res.json({ error_code: "USER_NOT_FOUND", description: "Some error Occurred" });
//       } catch (error) {
//         res.json({ error_code: "SEND_EMAIL_ERROR", description: "Some error Occurred" });
//       }
//     } else
//       res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
//   } catch (error) {
//     console.log(error)
//     res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
//   }
// }
//
