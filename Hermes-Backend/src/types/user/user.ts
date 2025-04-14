import { z } from "zod";
import { Error } from "../common/error";

type USER_ERROR_CODES = "INTERNAL_ERROR"


export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6), // Adjust the min length as needed
  first_name: z.string(),
  last_name: z.string(),
  image_url: z.string().url().optional(),
  display_name: z.string(),
  is_email_verified: z.boolean(),
  user_id: z.string(),
});





export type UpdateUserData = z.infer<typeof UserSchema>;




// Type inference from Zod schema
export type User = z.infer<typeof UserSchema>;



export const userRequestSchema = UserSchema

export type UserRequest = z.infer<typeof userRequestSchema>

export type UserResponse = Error<USER_ERROR_CODES> | z.infer<typeof UserSchema>




export const userPartialSchema = UserSchema.partial()

export type UserUpdateRequest = z.infer<typeof userPartialSchema>

export type UserUpdateResponse = Error<USER_ERROR_CODES> | {status: "USER_UPDATED_SUCCESSFULLY"}



