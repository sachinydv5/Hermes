import { decodeOBJ, encodeOBJ } from '../middlewares/crypto';
import { MARK_OTP_AS_VERIFIED, OTP_FIND_BY_ID } from '../types/auth/otp';
import { UserLoginRequest, UserLoginResponse, UserLogoutRequest, UserLogoutResponse, UserSignUpRequest, UserSignUpResponse, VerifyOtpRequest, VerifyOtpResponse } from '../types/auth/trigger';
import { TypedRequest, TypedResponse } from '../types/express.types';
import date from '../utils/date';
import { createUserWithEmailAndPassword, findUserByEmail } from '../database/dashboard/dashboard';
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
      if (user)
        res.json({ error_code: "EMAIL_ALREADY_IN_USE", description: "Some error Occurred" });
      else if (!isPasswordStrong(req.body.password))
        res.json({ error_code: "PASSWORD_TOO_WEAK", description: "Some error Occurred" });
      else {
        const encryptedPassword = await hash(req.body.password, 10);
        const newUser = await createUserWithEmailAndPassword(req.body.email, encryptedPassword, req.body.firstName, req.body.lastName);
        const userIP = (req.headers["x-forwarded-for"] || "").toString();
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
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred 2" });
  }
}


export const handleLogin = async (req: TypedRequest<UserLoginRequest>, res: TypedResponse<UserLoginResponse>) => {
  try {
    if ("email" in req.body) {
      const user = await findUserByEmail(req.body.email)
      const password = await compare(req.body.password, user!.password)
      if (user && password) {
        const userIP = (req.headers["x-forwarded-for"] || "").toString();
        const tokenId = uuidv4();
        await createUserLogin({
          device: req.headers["user-agent"] ?? "",
          tokenId: tokenId,
          userEmail: user.email,
          ipAddress: userIP,
        })
        const userToken = {
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
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}


