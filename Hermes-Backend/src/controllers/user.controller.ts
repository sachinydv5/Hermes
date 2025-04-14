import { findUserAndUpdate, findUserByEmail } from "../database/users/user";
import { TypedRequestEmail, TypedResponse } from "../types/express.types";
import { UpdateUserData, UserRequest, UserResponse, UserUpdateRequest, UserUpdateResponse } from "../types/user/user";

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


export const updateUser = async (req: TypedRequestEmail<UserUpdateRequest>, res: TypedResponse<UserUpdateResponse>) => {
  try {
    if (req.email) {
      const updateUser: UserUpdateRequest = {
        first_name: req.body.first_name ,
        last_name: req.body.last_name ,
        display_name: req.body.display_name ,
        image_url: req.body.image_url,
      }
    const resp = await findUserAndUpdate(req.email, updateUser)
      if (!resp) {
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
      } else {
        res.json({ status: 'USER_UPDATED_SUCCESSFULLY' });
      }
    }
  } catch (err) {
    console.error(err);
    return res.json({ error_code: 'INTERNAL_SERVER_ERROR', description: "" });
  }
};


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
