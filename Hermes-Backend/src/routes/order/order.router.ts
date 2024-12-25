import express from 'express';
import { validateData } from '../../middlewares/validation.middleware';
import { authTokenVerification } from '../../middlewares/token';
import { orderRequestScheme } from '../../types/order/order.types';
import { orderCreateController } from '../../controllers/order.controller';

export const orderRouter = express.Router();

orderRouter.post('/create', validateData(orderRequestScheme), orderCreateController);

orderRouter.get('/status', authTokenVerification);

