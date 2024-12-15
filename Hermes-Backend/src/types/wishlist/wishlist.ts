import { z } from "zod";
import { Error } from "../common/error";
import { ProductDoSchema } from "../product/product";



type WISHLIST_CODES = "INTERNAL_ERROR"

export const wishlistRequestScheme = z.object({
  productId: z.string()
});


export type WishlistAddRequest = z.infer<typeof wishlistRequestScheme>

export type WishlistAddResponse = Error<WISHLIST_CODES> | {
  status: "SUCCESS",
}

export type WishlistGetRequest = {
  email: string
};

export type WishlistGetResponse = Error<WISHLIST_CODES> | {
  status: "SUCCESS",
  wishlist: ProductDoSchema[]
}



export const wishlistScheme = z.object({
  wishlist: z.array(z.string()).min(0),
});

export type WishlistType = z.infer<typeof wishlistScheme>




