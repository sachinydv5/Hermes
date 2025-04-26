import express from 'express';
import { addToWishlistController, getWishlistController, removeFromWishlistController } from '../../controllers/wishlist.controller';
import { authTokenVerification } from '../../middlewares/token';
import { addToCartController, getCartController, removeFromCartController } from '../../controllers/cart.controller';

export const cartRouter = express.Router();

cartRouter.post('/add', authTokenVerification, addToCartController);

cartRouter.post('/remove', authTokenVerification, removeFromCartController);

cartRouter.get('/get', authTokenVerification, getCartController  );



