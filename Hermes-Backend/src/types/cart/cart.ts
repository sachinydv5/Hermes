import { z } from "zod";
import { Error } from "../common/error";
import { ProductDoSchema } from "../product/product";



type CART_ERROR_CODES = "INTERNAL_ERROR"

export const addToCartRequestScheme = z.object({
  productId: z.string()
});


export type AddToCartRequest = z.infer<typeof addToCartRequestScheme>

export type AddToCartResponse = Error<CART_ERROR_CODES> | {
  status: "SUCCESS",
}

export type GetCartRequest = {
};

export type GetCartResponse = Error<CART_ERROR_CODES> | {
  status: "SUCCESS",
  wishlist: ProductDoSchema[]
}


export type RemoveFromCartRequest = z.infer<typeof addToCartRequestScheme>

export type RemoveFromCartResponse = Error<CART_ERROR_CODES> | {
  status: "SUCCESS",
}



export const cartScheme = z.object({
  cart: z.array(z.string()).min(0),
});

export type CartType = z.infer<typeof cartScheme>




