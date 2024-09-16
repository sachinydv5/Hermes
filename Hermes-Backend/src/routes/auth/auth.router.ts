import express from 'express';
import { handlerEmailAuthentication } from '../../controllers/auth.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { triggerOTPScheme } from '../../types/auth/trigger';


export const authRouter = express.Router();


authRouter.post('/login', validateData(triggerOTPScheme) , handlerEmailAuthentication);

