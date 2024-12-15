import express from 'express';
import { addToWishlistController, getWishlistController, removeFromWishlistController } from '../../controllers/wishlist.controller';
import { authTokenVerification } from '../../middlewares/token';

export const cartRouter = express.Router();

cartRouter.post('/add', authTokenVerification, addToWishlistController);

cartRouter.post('/remove', authTokenVerification, removeFromWishlistController);

cartRouter.get('/get', authTokenVerification, getWishlistController  );



