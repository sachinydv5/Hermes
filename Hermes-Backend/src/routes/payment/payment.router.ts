import express from 'express';
import { validateData } from '../../middlewares/validation.middleware';
import { paymentRequestScheme } from '../../types/payment/payment.types';
import { paymentController } from '../../controllers/payment.controller';
import { authTokenVerification } from '../../middlewares/token';

export const paymentRouter = express.Router();

paymentRouter.post('/create', authTokenVerification, validateData(paymentRequestScheme), paymentController);


