import { getFirestore} from 'firebase-admin/firestore';
import moment from "moment";
import { randomUUID } from "crypto";
import { CollectionDoSchema, CollectionRequestDTOSchema, CollectionResponseDTOSchema } from '../../types/collection/collection';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { COLLECTION_DB_CDOLLECTION } from '../constants';

export const addCollectionToDB = async(collection: CollectionRequestDTOSchema) =>{
    const db = getFirestore();

    const collectionDo :CollectionDoSchema = {
        id: randomUUID(),
        collectionName: collection.collectionName,
        collectionDescription: collection.collectionDescription,
        isCollectionEnabled: collection.productId?.length! > 0,
        category:collection.category,
        userId: collection.userId,
        ...(collection.productId?.length! > 0 &&{ productId : collection.productId})
    }
    db.collection(COLLECTION_DB_CDOLLECTION).doc(collectionDo.id).set(collectionDo);
}

/*
    To be used for getting all the user's collection
    Params:
        userId: UUID(string)
*/
export const getUserCollectionsFromDB = async(userId: string) =>{
    const db = getFirestore();
    const collectionsRef = db.collection(COLLECTION_DB_CDOLLECTION);
    const q =collectionsRef.where('userId', '==', userId).orderBy('userId');
    const result=await q.get();
    const collections:CollectionDoSchema[] = result.docs.map(doc => {
        const data = doc.data() as CollectionDoSchema; 
        return data;
    });
    return collections;
}

/*
    To be used for global collection search by users
    Params:
        collectionName: Name of the collection
*/
export const getCollectionsByNameFromDB = async(collectionName: string) =>{
    const db = getFirestore();
    const collectionsRef = db.collection(COLLECTION_DB_CDOLLECTION);
    const q =collectionsRef.where('collectionName', '>=', collectionName).where('collectionName', '<', collectionName + '\uf8ff').orderBy('collectionName');
    const result=await q.get();
    const collections:CollectionDoSchema[] = result.docs.map(doc => {
        const data = doc.data() as CollectionDoSchema; 
        return data;
    });
    return collections;
}

/*
    To be used to get particular collection name from a user
    Params:
        collectionName: Name of the collection
        UserId: UUID
*/
export const getCollectionByNameAndUser = async(collectionName:string, userId: string) => {
    const db = getFirestore();
    const collectionsRef = db.collection(COLLECTION_DB_CDOLLECTION);
    const q =collectionsRef.where('collectionName', '==', collectionName).where('userId', '==', userId);
    const result=await q.get();
    const collections:CollectionDoSchema[] = result.docs.map(doc => {
        const data = doc.data() as CollectionDoSchema; 
        return data;
    });
    return collections;
}


/*
    To be used to get particular collection name from a user
    Params:
        collectionName: Name of the collection
        UserId: UUID
*/
export const getCollectionByCollectionIdAndUserId = async(collectionId:string, userId: string) => {
    const db = getFirestore();
    const collectionsRef = db.collection(COLLECTION_DB_CDOLLECTION);
    const q =collectionsRef.where('collectionId', '==', collectionId).where('userId', '==', userId);
    const result=await q.get();
    const collections:CollectionDoSchema[] = result.docs.map(doc => {
        const data = doc.data() as CollectionDoSchema; 
        return data;
    });
    return collections;
}