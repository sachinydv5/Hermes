import { error } from "console";
import { addCollectionToDB, getCollectionByNameAndUser, getCollectionsByNameFromDB, getUserCollectionsFromDB } from "../database/collection/collection";
import { CollectionRequestDTOSchema, CollectionResponseDTOSchema } from "../types/collection/collection";
import { TypedRequest, TypedResponse } from "../types/express.types";
import { CommonException, ERROR_RESPONSE } from "../types/common/error";

export const addCollection = async (req: TypedRequest<CollectionRequestDTOSchema>, res: TypedResponse<CollectionResponseDTOSchema>) => {
    try {
        // validateCategory();
        // validateUserId();
        await validateCollectionName(req.body.collectionName,req.body.userId);
        await addCollectionToDB(req.body);
        res.json({status:"COLLECTION_ADDED_SUCCESSFULLY"})
    } catch(error){
        if(error instanceof CommonException){
            res.status(500);
            res.json({ error_code: error.error_code, description: error.description });
        } else {
            res.status(500);
            res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
        }
    }
}


export const getCollectionByName = async (req: TypedRequest<CollectionResponseDTOSchema>, res: TypedResponse<CollectionResponseDTOSchema>) => {
    try {
        // validateCategory();
        // validateUserId();
        let collections =await getCollectionsByNameFromDB(req.query!.name as string);
        res.json({status:"COLLECTION_FETCHED_BY_NAME_SUCCESSFULLY",collectionsList:collections})
    } catch(error){
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
    }
}

export const getCollectionByUser = async (req: TypedRequest<CollectionResponseDTOSchema>, res: TypedResponse<CollectionResponseDTOSchema>) => {
    try {
        let collections = await getUserCollectionsFromDB(req.query!.name as string);
        res.json({status:"USER_COLLECTION_FETCHED_SUCCESSFULLY",collectionsList:collections});
    } catch(error){
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
    }
}
async function validateCollectionName(collectionName: string, userId: string) {
    try{
        let collection = await getCollectionByNameAndUser(collectionName,userId);
        if(collection.length>0){
            throw new CommonException("BAD_REQUEST","Collection with same name exist");
        }
    } catch(error){
        throw error;
    }
}

