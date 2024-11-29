import { addCollectionToDB } from "../database/collection/collection";
import { CollectionRequestDTOSchema, CollectionResponseDTOSchema } from "../types/collection/collection";
import { TypedRequest, TypedResponse } from "../types/express.types";

export const addCollection = async (req: TypedRequest<CollectionRequestDTOSchema>, res: TypedResponse<CollectionResponseDTOSchema>) => {
    try {
        // validateCategory();
        // validateUserId();
        addCollectionToDB(req.body);
        res.json({status:"COLLECTION_ADDED_SUCCESSFULLY"})
    } catch(error){
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
    }
}
