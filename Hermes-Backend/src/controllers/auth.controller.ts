import { encodeOBJ } from '../middlewares/crypto';
import { otpmodel } from '../types/auth/otp';
import { TriggerOtpRequest, TriggerOtpResponse } from '../types/auth/trigger';
import { TypedRequest, TypedResponse } from '../types/express.types';
import OTP from 'otp-generator'




export const handlerEmailAuthentication = async (req: TypedRequest<TriggerOtpRequest>, res: TypedResponse<TriggerOtpResponse>) => {
  const otp = OTP.generate(6, {
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
  });
  const otpModel = await otpmodel(otp, req.body.email);
  const token = await encodeOBJ({ id: otpModel._id, email: req.body.email })
  res.json({ otp: otp, email: req.body.email, otpModel: token });
}
