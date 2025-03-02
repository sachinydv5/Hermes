import express from 'express';
import { paymentWebHookController } from '../../controllers/payment.webhook.controller';

export const webhookRouter = express.Router();

webhookRouter.get('/',express.raw({ type: 'application/json' }), paymentWebHookController);

