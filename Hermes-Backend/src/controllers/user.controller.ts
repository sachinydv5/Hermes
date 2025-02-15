import { findUserByEmail } from "../database/users/user";
import { TypedRequestEmail, TypedResponse } from "../types/express.types";
import { UserRequest, UserResponse } from "../types/user/user";

export const userController = async (req: TypedRequestEmail<UserRequest>, res: TypedResponse<UserResponse>) => {
  try {
    if (req.email) {
      const resp = await findUserByEmail(req.email)
      if (!resp) {
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
      } else {
        res.json(resp);
      }
    } else {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    }

  } catch (e) {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }
}

//
// export const orderUpdateController = async (req: TypedRequest<UpdateOrderRequest>, res: TypedResponse<UpdateOrderResponse>) => {
//   try {
//     const orderId = req.body.orderId;
//     await updateOrderStatus(orderId, req.body.orderStatus);
//     res.json({ status: "SUCCESS" })
//   } catch (e) {
//     res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
//   }
// }
