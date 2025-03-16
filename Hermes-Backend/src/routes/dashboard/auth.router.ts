import express from 'express';
import { handleLogin, handleLogout, handleVerification, handleUserSignUp } from '../../controllers/dashboard.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { userLoginScheme, userLogoutScheme, UserSignUpScheme, verifyOTPScheme } from '../../types/auth/trigger';
import { blacklistToken } from '../../middlewares/blacklistToken';


export const dashboardRouter = express.Router();


dashboardRouter.post('/signup', validateData(UserSignUpScheme), handleUserSignUp);

dashboardRouter.post('/verify', validateData(verifyOTPScheme), handleVerification);

dashboardRouter.post('/login', validateData(userLoginScheme), handleLogin)

dashboardRouter.post('/logout', validateData(userLogoutScheme), blacklistToken, handleLogout)


