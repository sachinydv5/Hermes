import { getCart } from "../database/cart/cart";
import { findOrderByOrderId } from "../database/order/order";
import { findProductByProductId } from "../database/product/product";
import { TypedRequest, TypedRequestEmail, TypedResponse } from "../types/express.types";
import { PaymentRequest, PaymentResponse } from "../types/payment/payment.types";
import { ProductDoSchema } from "../types/product/product";

const stripe = require('stripe')('sk_test_51Qmc0oA5UUnJr17qB2vMD75NhzYdTvsNSUkU8Uq2yl5CUGlqpFfFtqVSkrE2Eofj7I5UqeYyk61gYzbICsWnVIff00sLfqWzwl');


const YOUR_DOMAIN = 'http://localhost:3002';


export const paymentController = async (req: TypedRequestEmail<PaymentRequest>, res: TypedResponse<PaymentResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred Email not found " });
    } else {
      const orderId = req.body.orderId;
      const resp = await findOrderByOrderId(orderId);

      if (resp) {
        let productList: ProductDoSchema[] = [];
        const productPromises = resp.products.map(async (i) => {
          const r = await findProductByProductId(i.id);
          return r; // Return the product, even if it's null/undefined
        });
        const resolvedProduct = await Promise.all(productPromises);
        productList = resolvedProduct.filter((item) => item !== null && item !== undefined);

        const lineItems = productList.map((product: ProductDoSchema) => ({ price: product.price, quantity: product.qty }));
        const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: 'payment',
          success_url: `${YOUR_DOMAIN}?success=true`,
          cancel_url: `${YOUR_DOMAIN}?canceled=true`,
          automatic_tax: { enabled: true },
        });
        res.redirect(303, session.url);
      } else {
        res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
      }
    }
  } catch (e) {
    res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
  }
}

