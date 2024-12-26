import express from 'express';
import { validateData } from '../middlewares/validation.middleware';
import { CollectionRequestDTO } from '../types/collection/collection';
import { addCollection, getCollectionByName, getCollectionByUser } from '../controllers/collection.controller';

export const collectionRouter = express.Router();

collectionRouter.post('/addCollection', validateData(CollectionRequestDTO) , addCollection);

collectionRouter.get('/getCollectionsByName', getCollectionByName);
collectionRouter.get('/getCollectionsByUser', getCollectionByUser);
