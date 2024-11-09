import express from 'express';
import { handleLogin, handleVerification, handlerAuthentication } from '../../controllers/auth.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { triggerOTPScheme, userLoginScheme, verifyOTPScheme } from '../../types/auth/trigger';


export const authRouter = express.Router();


authRouter.post('/signup', validateData(triggerOTPScheme) , handlerAuthentication);

authRouter.post('/verify', validateData(verifyOTPScheme), handleVerification);

authRouter.post('/login', validateData(userLoginScheme), handleLogin )
