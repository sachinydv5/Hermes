import stripe, { Stripe } from "stripe";
import { getCart } from "../database/cart/cart";
import { findOrderByOrderId, updateOrderStatus } from "../database/order/order";
import { findProductByProductId } from "../database/product/product";
import { TypedRequest, TypedRequestEmail, TypedResponse } from "../types/express.types";
import { PaymentRequest, PaymentResponse } from "../types/payment/payment.types";
import { PaymentQueryRequest, PaymentQueryResponse } from "../types/webhook/payment";
import { config } from '../configs/env.config';


export const paymentWebHookController = async (req: any, res: TypedResponse<PaymentQueryResponse>) => {
  
  const sig = req.headers['stripe-signature'];
  const endpointSecret = config.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    console.error('⚠️ Webhook verification failed:', err.message ?? "");
    return res.status(400).json({ error: 'Webhook signature verification failed' });
  }

  // Handle different event types
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;

      // Extract metadata
      const orderId = session.metadata?.orderID;
      if (!orderId) {
        console.error('⚠️ Order ID missing in metadata');
        return res.status(400).json({ error: 'Order ID missing in metadata' });
      }

      // Update order status in database
      try {
        await updateOrderStatus(orderId, 'PAYMENT_SUCCESS');
        console.log(`✅ Order ${orderId} marked as PAID`);
      } catch (error) {
        console.error('⚠️ Error updating order status:', error);
        return res.status(500).json({ error: 'Failed to update order status' });
      }
      break;

    default:
      console.log(`ℹ️ Received unsupported event type: ${event.type}`);
  }

  // Respond to Stripe to acknowledge receipt of the event
  res.json({ received: true });
}