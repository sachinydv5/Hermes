import { getFirestore} from 'firebase-admin/firestore';
import moment from "moment";
import { randomUUID } from "crypto";
import { CollectionDoSchema, CollectionRequestDTOSchema } from '../../types/collection/collection';

export const addCollectionToDB = async(collection: CollectionRequestDTOSchema) =>{
    const db = getFirestore();

    const collectionDo :CollectionDoSchema = {
        id: randomUUID(),
        collectionName: collection.collectionName,
        collectionDescription: collection.collectionDescription,
        isCollectionEnabled: collection.productId?.length! > 0,
        category:collection.category,
        userId: randomUUID(),
        ...(collection.productId?.length! > 0 &&{ productId : collection.productId})
    }
    db.collection("collection").doc(collectionDo.id).set(collectionDo);

}