import express from 'express';
import { addProduct,getProduct } from '../../controllers/product.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { ProductSchema } from '../../types/product/product'

export const productRouter = express.Router();

productRouter.post('/addProduct', validateData(ProductSchema) , addProduct);

productRouter.get('/getProduct', getProduct);
