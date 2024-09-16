import { Schema, model } from 'mongoose';
import { emailValidation, phoneValidation } from "../../utils/utils";

interface OTP {
  createdAt: Date;
  expirationTime: Date;
  otp: string;
  verified: boolean;
  email: string;
  phoneNumber: string;
}


const otpSchema = new Schema<OTP>({
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


const otp_model = model<OTP>("OTP", otpSchema);

export const otpmodel = async (otp:string, email: string) => await otp_model.create({
  email, otp,
})
