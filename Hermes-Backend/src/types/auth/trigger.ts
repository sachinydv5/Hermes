import { z } from 'zod';

type GLOBAL_ERROR_CODE = "INTERNAL_SERVER_ERROR" | "UNAUTHORIZED"

export type Error<P> = {
  error_code: GLOBAL_ERROR_CODE | P,
  description: string
}

export type ERROR_RESPONSE = {
  error_code: GLOBAL_ERROR_CODE,
  description: string
}


// Trigger OTP Request

export const triggerOTPScheme = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string()
})
// .or(z.object({
//   // phone_number: z.string().length(10),
//   // email: z.string().email(),
// }))

type TRIGGER_ERROR_CODES = "SEND_EMAIL_ERROR" | "USER_NOT_FOUND" | "EMAIL_ALREADY_IN_USE" | "INVALID_EMAIL" | "PASSWORD_TOO_WEAK"

export type TriggerOtpRequest = z.infer<typeof triggerOTPScheme>;

export type TriggerOtpResponse = Error<TRIGGER_ERROR_CODES> | {
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

