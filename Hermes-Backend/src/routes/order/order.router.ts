import express from 'express';
import { validateData } from '../../middlewares/validation.middleware';
import { authTokenVerification } from '../../middlewares/token';
import { orderRequestScheme, updateOrderRequestSchema } from '../../types/order/order.types';
import { orderCreateController, orderStatusAllController, orderStatusController, orderUpdateController } from '../../controllers/order.controller';

export const orderRouter = express.Router();

orderRouter.post('/create', authTokenVerification, validateData(orderRequestScheme), orderCreateController);
orderRouter.post('/update', validateData(updateOrderRequestSchema), orderUpdateController);
orderRouter.get('/status/:orderId', orderStatusController);
orderRouter.post('/all', authTokenVerification, orderStatusAllController)
