import express from 'express';
import { addProduct,getProduct } from '../controllers/product.controller';
import { validateData } from '../middlewares/validation.middleware';
import { CollectionRequestDTO } from '../types/collection/collection';
import { addCollection } from '../controllers/collection.controller';

export const collectionRouter = express.Router();

collectionRouter.post('/addCollection', validateData(CollectionRequestDTO) , addCollection);

collectionRouter.get('/getCollectionsByName', getProduct);
collectionRouter.get('/getCollectionsByUser', getProduct);
