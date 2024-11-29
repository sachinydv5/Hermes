import { Schema, model } from 'mongoose';
import { emailValidation, phoneValidation } from "../../utils/utils";
import { Document } from "mongoose";

interface OTP_SCHEMA {
  createdAt: Date;
  expirationTime: Date;
  otp: string;
  verified: boolean;
  email: string;
  phoneNumber: string;
}
export type OTP_DOCUMENT = Document & OTP_SCHEMA;

const otpSchema = new Schema<OTP_SCHEMA>({
  createdAt: { type: Date, default: new Date().getTime() },
  expirationTime: { type: Date, default: new Date().getTime() + 172800000 },
  otp: { type: String },
  verified: { type: Boolean, default: false },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: [emailValidation, "INVALID_EMAIL_ID"],
  },
  phoneNumber: {
    type: String,
    trim: true,
    validate: [phoneValidation, "INVALID_PHONE_NUMBER"]

  }
});



// Add a pre-save hook to ensure either email or phone number is provided, but not both
otpSchema.pre('validate', function(next) {
  if (!this.email && !this.phoneNumber) {
    next(new Error('Either email or phone number must be provided.'));
  } else if (this.email && this.phoneNumber) {
    next(new Error('Only one of email or phone number should be provided.'));
  } else {
    next();
  }
});


export const OtpModel = model<OTP_SCHEMA>("OTP", otpSchema);

export const OTP_EMAIL = async (otp:string, email: string) => await OtpModel.create({ email, otp });

export const OTP_PHONE_NUMBER = async (otp:string, phoneNumber: string) => await OtpModel.create({ phoneNumber, otp });

export const OTP_FIND_BY_ID = async (id:string): Promise<OTP_DOCUMENT | null> => await OtpModel.findById(id);

export const MARK_OTP_AS_VERIFIED = async (otp_db: OTP_DOCUMENT) => {
  otp_db.verified = true;
  await otp_db.save();
}
