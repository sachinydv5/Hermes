import { findProductByProductId } from "../database/product/product";
import { addToWishlist, getWishlist, removeFromWishlist } from "../database/wishlist/wishlist";
import { TypedRequestEmail, TypedResponse } from "../types/express.types";
import { ProductDoSchema } from "../types/product/product";
import { WishlistAddRequest, WishlistAddResponse, WishlistGetRequest, WishlistGetResponse } from "../types/wishlist/wishlist";


export const getWishlistController = async (req: TypedRequestEmail<WishlistGetRequest>, res: TypedResponse<WishlistGetResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred Email not found " });
    } else {
      const wishlistDB = await getWishlist(req.email);
      let list: ProductDoSchema[] = [];
      if (wishlistDB) {
        const wishlistPromises = wishlistDB.wishlist.map(async (i) => {
          const r = await findProductByProductId(i);
          return r; // Return the product, even if it's null/undefined
        });
        const resolvedWishlist = await Promise.all(wishlistPromises);
        list = resolvedWishlist.filter((item) => item !== null && item !== undefined);
        res.json({ status: "SUCCESS", wishlist: list });
        // res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
      } else {
        res.json({ status: "SUCCESS", wishlist: [] });
      }
    }

  } catch (error) {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}

export const addToWishlistController = async (req: TypedRequestEmail<WishlistAddRequest>, res: TypedResponse<WishlistAddResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    }
    else {
      await addToWishlist(req.email, req.body.productId)
      res.json({ status: "SUCCESS" });
    }
  } catch (error) {
    console.error(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }

}


export const removeFromWishlistController = async (req: TypedRequestEmail<WishlistAddRequest>, res: TypedResponse<WishlistAddResponse>) => {
  try {
    if (!req.email) {
      res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
    }
    else {
      await removeFromWishlist(req.email, req.body.productId)
      res.json({ status: "SUCCESS" });
    }
  } catch (error) {
    console.error(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }

}
