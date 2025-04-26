import { addToCart, getCart, removeFromCart } from "../database/cart/cart";
import { findProductByProductId } from "../database/product/product";
import { AddToCartRequest, AddToCartResponse, GetCartRequest, GetCartResponse, RemoveFromCartRequest, RemoveFromCartResponse } from "../types/cart/cart";
import { TypedRequestEmail, TypedResponse } from "../types/express.types";
import { ProductDoSchema } from "../types/product/product";


export const getCartController = async (req: TypedRequestEmail<GetCartRequest>, res: TypedResponse<GetCartResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred Email not found " });
    } else {
      const cartDB = await getCart(req.email);
      console.log("cartDB.cart")
      console.log(cartDB?.cart)
      let list: ProductDoSchema[] = [];
      if (cartDB && cartDB.cart) {
        const wishlistPromises = cartDB.cart.map(async (i) => {
          const r = await findProductByProductId(i.productId);
          if (r){
            r.qty = i.quantity
            return r; 
          }
          else return null;
        });
        const resolvedCart = await Promise.all(wishlistPromises);
        list = resolvedCart.filter((item) => item !== null && item !== undefined);
        console.log(list)
        res.json({ status: "SUCCESS", cart: list, cartSummary: {
           totalAmount: list.reduce((sum, item) => sum + item.qty * parseFloat(item.price), 0)
        } });
        // res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
      } else {
        res.json({ status: "SUCCESS", cart: [] });
      }
    }

  } catch (error) {
    console.log(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}

export const addToCartController = async (req: TypedRequestEmail<AddToCartRequest>, res: TypedResponse<AddToCartResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    }
    else {
      await addToCart(req.email, req.body.productId)
      res.json({ status: "SUCCESS" });
    }
  } catch (error) {
    console.error(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }

}


export const removeFromCartController = async (req: TypedRequestEmail<RemoveFromCartRequest>, res: TypedResponse<RemoveFromCartResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    }
    else {
      await removeFromCart(req.email, req.body.productId)
      res.json({ status: "SUCCESS" });
    }
  } catch (error) {
    console.error(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }

}
