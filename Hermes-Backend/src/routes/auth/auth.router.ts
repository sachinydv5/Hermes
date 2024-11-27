import express from 'express';
import { handleLogin, handleLogout, handleVerification, handleUserSignUp } from '../../controllers/auth.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { userLoginScheme, userLogoutScheme, UserSignUpScheme, verifyOTPScheme } from '../../types/auth/trigger';
import { blacklistToken } from '../../middlewares/blacklistToken';


export const authRouter = express.Router();


authRouter.post('/signup', validateData(UserSignUpScheme), handleUserSignUp);

authRouter.post('/verify', validateData(verifyOTPScheme), handleVerification);

authRouter.post('/login', validateData(userLoginScheme), handleLogin)

authRouter.post('/logout', validateData(userLogoutScheme), blacklistToken, handleLogout)



