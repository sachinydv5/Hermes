import express from 'express';
import { validateData } from '../../middlewares/validation.middleware';
import { paymentRequestScheme } from '../../types/payment/payment.types';
import { paymentController } from '../../controllers/payment.controller';

export const paymentRouter = express.Router();

paymentRouter.post('/create', validateData(paymentRequestScheme), paymentController);


