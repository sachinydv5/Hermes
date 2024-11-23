import { TriggerOtpResponse } from "../types/auth/trigger";
import { ProductRequestSchema, ProductResponseSchema } from "../types/product/product";
import { TypedRequest, TypedResponse } from "../types/express.types";
import { addProductInDB } from "../database/product/product";

export const addProduct = async (req: TypedRequest<ProductRequestSchema>, res: TypedResponse<ProductResponseSchema>) => {
    try {
        console.log("Here");
        // validateCategory();
        // validateCollectionId();
        // validatePickupAddress();
        addProductInDB(req.body);
        res.json({status:"PRODUCT_ADDED_SUCCESSFULLY"})
    } catch(error){

    }

}

function validateCollectionId() {
    throw new Error("Function not implemented.");
}
function validateCategory() {
    throw new Error("Function not implemented.");
}

