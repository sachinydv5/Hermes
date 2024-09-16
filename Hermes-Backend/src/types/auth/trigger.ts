import { z } from 'zod';

export const triggerOTPScheme = z.object({
  // phone_number: z.number().max(10).min(10),
  email: z.string().email(),
})

export type TriggerOtpRequest = z.infer<typeof triggerOTPScheme>; 

export type TriggerOtpResponse = {
  otp: string;
  email: string;
  otpModel: any
}


