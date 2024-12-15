import express from 'express';
import { addToWishlistController, getWishlistController, removeFromWishlistController } from '../../controllers/wishlist.controller';
import { authTokenVerification } from '../../middlewares/token';

export const wishlistRouter = express.Router();

wishlistRouter.post('/add', authTokenVerification, addToWishlistController);

wishlistRouter.post('/remove', authTokenVerification, removeFromWishlistController);

wishlistRouter.get('/get', authTokenVerification, getWishlistController  );

















