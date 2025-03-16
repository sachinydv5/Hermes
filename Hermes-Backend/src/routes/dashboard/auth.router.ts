import express from 'express';
import { handleLogin, handleLogout, handleVerification, handleUserSignUp } from '../../controllers/dashboard.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { userLoginScheme, userLogoutScheme, UserSignUpScheme, verifyOTPScheme } from '../../types/dashboard/trigger';
import { blacklistToken } from '../../middlewares/blacklistToken';


export const dashboardRouter = express.Router();


dashboardRouter.post('/dashboard/signup', validateData(UserSignUpScheme), handleUserSignUp);

dashboardRouter.post('/dashbaord/verify', validateData(verifyOTPScheme), handleVerification);

dashboardRouter.post('/dashboard/login', validateData(userLoginScheme), handleLogin)

dashboardRouter.post('/dashboard/logout', validateData(userLogoutScheme), blacklistToken, handleLogout)


