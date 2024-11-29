import { ProductRequestSchema, AddProductResponseSchema, GetProductDoResponse, ProductDoSchema } from "../types/product/product";
import { TypedRequest, TypedResponse } from "../types/express.types";
import { addProductInDB, getProductsFromDB, getTotalRecords } from "../database/product/product";

export const addProduct = async (req: TypedRequest<ProductRequestSchema>, res: TypedResponse<AddProductResponseSchema>) => {
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

export const getProduct = async (req: TypedRequest<any>, res: TypedResponse<GetProductDoResponse> ) => {
    try{
        const limitValue = parseInt(req.query.limit as string) || 10; // Default to 10 items per page
        const page = parseInt(req.query.page as string) || 1; // Default to page 1 if not provided
    
        // Validate pagination parameters
        if (page <= 0 || limitValue <= 0) {
            res.status(400).json({
            error_code: "BAD_REQUEST",
            description: "Page and limit must be greater than zero."
          });
        }

        const totalProducts = await getTotalRecords();
        const totalPages = Math.ceil(totalProducts / limitValue);
    
        if((page-1)*limitValue >= totalProducts){
            res.status(400).json({
                error_code: "BAD_REQUEST",
                description: "Page or limit is wrong."
              });
            return;
        }
        const lastDocString = req.query.lastDoc?.toString() || undefined;
    
        const {products , lastRef} = await getProductsFromDB(lastDocString,limitValue);

        let response:GetProductDoResponse;
        if(page*limitValue >= totalProducts || products.length<limitValue){
            response = {
                status:"success",
                products: products,
                pageNo: page,
                pageSize: limitValue,
                totalPages: totalPages,
            }
        } else {
            response = { 
                status:"success",
                products: products,
                pageNo: page,
                pageSize: limitValue,
                totalPages: totalPages,
                lastRef: lastRef
            }
        }
        res.status(200).json(response);
    } catch(error){
        res.status(500).json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred", body: error });
    }
}

function validateCollectionId() {
    throw new Error("Function not implemented.");
}
function validateCategory() {
    throw new Error("Function not implemented.");
}
