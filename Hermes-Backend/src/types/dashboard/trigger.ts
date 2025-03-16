import { z } from 'zod';
import { emptyObject, Error } from '../common/error';

// Trigger OTP Request

export const UserSignUpScheme = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  secretToken: z.string(),
})
// .or(z.object({
//   // phone_number: z.string().length(10),
//   // email: z.string().email(),
// }))

type USER_SIGNUP_ERROR_CODES = "SEND_EMAIL_ERROR" | "USER_NOT_FOUND" | "EMAIL_ALREADY_IN_USE" | "INVALID_EMAIL" | "PASSWORD_TOO_WEAK"

export type UserSignUpRequest = z.infer<typeof UserSignUpScheme>;

export type UserSignUpResponse = Error<USER_SIGNUP_ERROR_CODES> | {
  status: "USER_CREATED_SUCCESSFULLY",
  authToken: string
}

// user Login Request 

export const userLoginScheme = z.object({
  email: z.string().email(),
  password: z.string(),
});

type USER_LOGIN_ERROR_CODES = "INCORRECT_EMAIL_PROVIDED" | "INCORRECT_PHONE_PROVIDED" | "BAD_OTP_REQUEST" | "INVALID_OTP" | "OTP_EXPIRED"

export type UserLoginRequest = z.infer<typeof userLoginScheme>;

export type UserLoginResponse = Error<USER_LOGIN_ERROR_CODES> | {
  status: "USER_LOGGED_IN",
  authToken: string,
  user: any,
}

// Verify OTP Request

export const verifyOTPScheme = z.object({
  email: z.string().email().optional(),
  phone_number: z.string().length(10).optional(),
  token: z.string(),
  otp: z.string(),
}).refine(
  (data) => data.email !== undefined || data.phone_number !== undefined,
  {
    message: "Either email or phone_number must be provided",
  }
);


type VERIFY_ERROR_CODES = "INCORRECT_EMAIL_PROVIDED" | "INCORRECT_PHONE_PROVIDED" | "BAD_OTP_REQUEST" | "INVALID_OTP" | "OTP_EXPIRED"

export type VerifyOtpRequest = z.infer<typeof verifyOTPScheme>;

export type VerifyOtpResponse = Error<VERIFY_ERROR_CODES> | {
  status: string,
  verified: boolean,
}

type USER_LOGOUT_CODES = "INTERNAL_ERROR"

export const userLogoutScheme = emptyObject;

export type UserLogoutRequest = z.infer<typeof userLogoutScheme>

export type UserLogoutResponse = Error<USER_LOGOUT_CODES> | {
  status: "USER_LOGGED_OUT"
}
