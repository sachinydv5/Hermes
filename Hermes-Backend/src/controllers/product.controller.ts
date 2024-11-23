import { ProductRequestSchema, ProductResponseSchema } from "../types/product/product";
import { TypedRequest, TypedResponse } from "../types/express.types";
import { addProductInDB } from "../database/product/product";

export const addProduct = async (req: TypedRequest<ProductRequestSchema>, res: TypedResponse<ProductResponseSchema>) => {
    try {
        // validateCategory();
        // validateCollectionId();
        // validatePickupAddress();
        addProductInDB(req.body);
        res.json({status:"PRODUCT_ADDED_SUCCESSFULLY"})
    } catch(error){
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
    }

}

function validateCollectionId() {
    throw new Error("Function not implemented.");
}
function validateCategory() {
    throw new Error("Function not implemented.");
}

