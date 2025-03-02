import { createOrder, findOrderByOrderId, updateOrderStatus } from "../database/order/order";
import { findProductByProductId } from "../database/product/product";
import { TypedRequest, TypedRequestEmail, TypedResponse } from "../types/express.types";
import { OrderCreateRequest, OrderCreateResponse, OrderStatusRequest, OrderStatusResponse, UpdateOrderRequest, UpdateOrderResponse } from "../types/order/order.types";
import { ProductDoSchema } from "../types/product/product";


export const orderCreateController = async (req: TypedRequestEmail<OrderCreateRequest>, res: TypedResponse<OrderCreateResponse>) => {
  try {
    req.email = "yogeshk4124@gmail.com"
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf erwg " });
    } else {
      let products: ProductDoSchema[];
      if (typeof req.body.products === "string") {
        const product = await findProductByProductId(req.body.products)
        if (product)
          products = [product]
        else
          products = []
      } else {
        const productsPromise = req.body.products.map(async id => await findProductByProductId(id));
        const productsResolved = await Promise.all(productsPromise);
        products = productsResolved.filter((item) => item !== null && item !== undefined);
      }
      if (products.length == 0) {
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf  length not found" });
      } else {
        const totalAmount: number = products.reduce((acc, i) => acc + parseInt(i.price) * i.qty, 0);
        const orderRes = await createOrder({
          products: products,
          address: {
            city: "",
            country: "",
            pincode: ""
          },
          totalAmount: totalAmount,
          lastUpdatedTime: new Date(),
          updateTrace: [],
          userEmail: req.email
        });
        res.json({
          products:products,
          totalAmount:totalAmount,
          // paymentGateway: z.array(z.object()),
          orderStatus: orderRes.orderStatus,
          address: orderRes.address,
          lastUpdatedTime: orderRes.lastUpdatedTime,
          updateTrace: [],
          // invoice: z.object({}).optional(),
          userEmail: orderRes.userEmail,
          orderId: orderRes.orderId,
          status: "SUCCESS"
        });
      }
    }
  } catch (error) {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " + error });
  }
}

export const orderStatusController = async (req: TypedRequest<OrderStatusRequest>, res: TypedResponse<OrderStatusResponse>) => {
  try {
    const { orderId } = req.params;
    console.log(orderId)
    const resp = await findOrderByOrderId(orderId);
    console.log(resp)

    if (!resp) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    } else {
      res.json({
        products:resp.products,
          totalAmount:resp.totalAmount,
          // paymentGateway: z.array(z.object()),
          orderStatus: resp.orderStatus,
          address: resp.address,
          lastUpdatedTime: resp.lastUpdatedTime,
          updateTrace:resp.updateTrace,
          // invoice: z.object({}).optional(),
          userEmail: resp.userEmail,
          orderId: resp.orderId,
          status: "SUCCESS"
      });
    }
  } catch (e) {
    console.log(e)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }
}


export const orderUpdateController = async (req: TypedRequest<UpdateOrderRequest>, res: TypedResponse<UpdateOrderResponse>) => {
  try {
    const orderId = req.body.orderId;
    await updateOrderStatus(orderId, req.body.orderStatus);
    res.json({ status: "SUCCESS"})
  } catch (e) {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }
}
