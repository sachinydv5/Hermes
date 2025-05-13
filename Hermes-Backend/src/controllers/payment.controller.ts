import { getCart } from "../database/cart/cart";
import { findOrderByOrderId, updateOrderStatus } from "../database/order/order";
import { findProductByProductId } from "../database/product/product";
import { TypedRequest, TypedRequestEmail, TypedResponse } from "../types/express.types";
import { PaymentRequest, PaymentResponse } from "../types/payment/payment.types";
import { ProductDoSchema } from "../types/product/product";

const stripe = require('stripe')('sk_test_51Qmc0oA5UUnJr17qB2vMD75NhzYdTvsNSUkU8Uq2yl5CUGlqpFfFtqVSkrE2Eofj7I5UqeYyk61gYzbICsWnVIff00sLfqWzwl');


const YOUR_DOMAIN = 'https://hermes-backend-pykc.onrender.com';


export const paymentController = async (req: TypedRequestEmail<PaymentRequest>, res: TypedResponse<PaymentResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred Email not found " });
    } else {
      const orderId = req.body.orderId;
      const resp = await findOrderByOrderId(orderId);
      console.log(resp)
      if (resp) {
        let productList: ProductDoSchema[] = [];
        const productPromises = resp.products.map(async (i) => {
          const r = await findProductByProductId(i.id);
          return r; // Return the product, even if it's null/undefined
        });
        const resolvedProduct = await Promise.all(productPromises);
        productList = resolvedProduct.filter((item) => item !== null && item !== undefined);

        // const lineItems = productList.map((product: ProductDoSchema) => ({ price: product.price, quantity: product.qty }));
        const lineItems = await Promise.all(
          productList.map(async (product: ProductDoSchema) => {
            
            console.log("Number(product.price)")
            console.log(Number(product.price))
            const priceObj = await stripe.prices.create({
              unit_amount: Number(product.price) * 100, // Stripe expects amount in cents (e.g., $10 → 1000)
              currency: 'usd',
              product_data: {
                name: product.name, // Ensure each product has a name
              },
            });
            
            
            return { price: priceObj.id, quantity: product.qty };
          })
        );
        const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: 'payment',
          success_url: `${YOUR_DOMAIN}/webhook?orderID=${orderId}&success=true`,
          cancel_url: `${YOUR_DOMAIN}/webhook?orderID=${orderId}canceled=true`,
          automatic_tax: { enabled: true },
          metadata: { orderID: orderId }, 
        });
        await updateOrderStatus(orderId, "INITIATED", "SYSTEM")
        res.json({
          status : "SUCCESS",
          "url" :  session.url
        })
        // res.redirect(303, session.url);
      } else {
        console.log("else")
        res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
      }
    }
  } catch (e) {
    console.log("error")
    console.log(e)
    res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
  }
}


export const paymentStatusController = async (req: TypedRequestEmail<{}>, res: TypedResponse<{}>) => {
  try {
    const { success, canceled, orderID } = req.query;
    if (orderID && typeof orderID === 'string') {
      if (success) {
        await updateOrderStatus(orderID, "PAYMENT_SUCCESS", "SYSTEM")
      }
      if (canceled) {
        await updateOrderStatus(orderID, "PAYMENT_FAILURE", "SYSTEM")
      }
    } else {
      res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
    }
  } catch (error) {
    res.json({ error_code: "INTERNAL_ERROR", description: "Some error Occurredewf " });
  }
}

// stripe.listen()

