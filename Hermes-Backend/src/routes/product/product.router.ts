import express, { RequestHandler } from 'express';
import { addProduct,getProduct, getProductID, uploadImage } from '../../controllers/product.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { ProductSchema } from '../../types/product/product'
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });


export const productRouter = express.Router();



productRouter.post('/addProduct', validateData(ProductSchema) , addProduct);

productRouter.get('/getProduct', getProduct);

productRouter.get('/getProduct/:id', getProductID);

productRouter.post('/uploadProduct', upload.array('image', 5) as unknown as RequestHandler, uploadImage)