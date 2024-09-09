import express from 'express';
import { handlerAuth } from '../../controllers/auth.controller';
import { testValidation } from '../../middlewares/validation.middleware';


export const authRouter = express.Router();


authRouter.post('/login', testValidation , handlerAuth);

