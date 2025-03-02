import stripe, { Stripe } from "stripe";
import { getCart } from "../database/cart/cart";
import { findOrderByOrderId, updateOrderStatus } from "../database/order/order";
import { findProductByProductId } from "../database/product/product";
import { TypedRequest, TypedRequestEmail, TypedResponse } from "../types/express.types";
import { PaymentRequest, PaymentResponse } from "../types/payment/payment.types";
import { PaymentQueryRequest, PaymentQueryResponse } from "../types/webhook/payment";
import { config } from '../configs/env.config';


export const paymentWebHookController = async (req: any, res: TypedResponse<PaymentQueryResponse>) => {
  
  try {
    const { success, canceled, orderID } = req.query;
    if (orderID && typeof orderID === 'string') {
      if (success) {
        await updateOrderStatus(orderID, "PAYMENT_SUCCESS")
      }
      if (canceled) {
        await updateOrderStatus(orderID, "PAYMENT_FAILURE")
      }
      res.redirect(`http://localhost:5173?orderID=${orderID}`)
    } else {
      res.json({ error: "INTERNAL_ERROR" });
    }
  } catch (error) {
    res.json({ error: "INTERNAL_ERROR" });
  }
}