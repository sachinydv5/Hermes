import { ProductRequestSchema, AddProductResponseSchema, GetProductDoResponse, ProductDoSchema, GetProductIdRespose, UploadProductImageRequest, UploadProductImageRespose } from "../types/product/product";
import { TypedRequest, TypedResponse } from "../types/express.types";
import { addProductInDB, findProductByProductId, getProductsFromDB, getTotalRecords } from "../database/product/product";

import express, { Request, Response } from 'express';
import { getCollectionByCollectionIdAndUserId, getCollectionByNameAndUser } from "../database/collection/collection";
import { CommonException } from "../types/common/error";
import { uploadImageToFirebase } from "../database/images/image";


export const addProduct = async (req: TypedRequest<ProductRequestSchema>, res: TypedResponse<AddProductResponseSchema>) => {
    try {
        if (req.body.collectionId) {
            await validateCollectionId(req.body.collectionId, req.body.userId);
        }
        const a = await addProductInDB(req.body);
        res.json({ status: "PRODUCT_ADDED_SUCCESSFULLY", "id": a })
    } catch (error) {
        if (error instanceof CommonException) {
            res.status(400);
            res.json({ error_code: error.error_code, description: error.description });
        } else {
            res.status(500)
            res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
        }
    }
}

export const getProduct = async (req: TypedRequest<any>, res: TypedResponse<GetProductDoResponse>) => {
    try {
        const limitValue = parseInt(req.query.limit as string) || 10; // Default to 10 items per page
        const page = parseInt(req.query.page as string) || 1; // Default to page 1 if not provided
        const searchText: string = req.query.searchText as string
        // Validate pagination parameters
        if (page <= 0 || limitValue <= 0) {
            res.status(400).json({
                error_code: "BAD_REQUEST",
                description: "Page and limit must be greater than zero."
            });
        }

        const totalProducts = await getTotalRecords();
        const totalPages = Math.ceil(totalProducts / limitValue);

        if ((page - 1) * limitValue >= totalProducts) {
            res.status(400).json({
                error_code: "BAD_REQUEST",
                description: "Page or limit is wrong."
            });
            return;
        }
        const lastDocString = req.query.lastDoc?.toString() || undefined;
        console.log("searchText === ")
        console.log(searchText)
        const { products, lastRef } = await getProductsFromDB(lastDocString, limitValue, searchText ? searchText.trim() : undefined);

        let response: GetProductDoResponse;
        if (page * limitValue >= totalProducts || products.length < limitValue) {
            response = {
                status: "success",
                products: products,
                pageNo: page,
                pageSize: limitValue,
                totalPages: totalPages,
            }
        } else {
            response = {
                status: "success",
                products: products,
                pageNo: page,
                pageSize: limitValue,
                totalPages: totalPages,
                lastRef: lastRef
            }
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred", body: error });
    }
}



export const getProductID = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        if (!productId)
            res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
        else {
            const product = await findProductByProductId(productId)
            res.json(product)
        }
    } catch (error) {
        res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
    }
}




async function validateCollectionId(collectionId: string, userId: string) {
    try {
        let collection = await getCollectionByCollectionIdAndUserId(collectionId, userId);
        if (collection.length <= 0) {
            throw new CommonException("BAD_REQUEST", "Collection does not exist");
        }
    } catch (error) {
        throw error;
    }
}
function validateCategory() {
    throw new Error("Function not implemented.");
}



export const uploadImage = async (
    req: TypedRequest<UploadProductImageRequest>,
    resp: TypedResponse<UploadProductImageRespose>
  ) => {
    try {
      const images = req.body.image; // Assuming `req.body.image` is an array of base64 strings
  
      if (!images || !Array.isArray(images) || images.length === 0) {
        return resp.json({
          error_code: "IMAGE_NOT_FOUND",
          description: "Image not found",
        });
      }
  
      const urls = await Promise.all(
        images.map(async (dataUri, index) => {
          // Example: 'data:image/png;base64,...'
          const matches = dataUri.match(/^data:(.+);base64,(.+)$/);
          if (!matches || matches.length !== 3) {
            throw new Error("Invalid image data format");
          }
  
          const mimeType = matches[1]; // e.g. image/png
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, "base64");
  
          const fileName = `image_${Date.now()}_${index}`;
          return await uploadImageToFirebase(buffer, fileName, mimeType);
        })
      );
  
      return resp.json({
        status: "IMAGE_UPLOAD_SUCCESFULL",
        urls,
      });
    } catch (error: any) {
      console.error(error);
      return resp.json({
        error_code: "INTERNAL_SERVER_ERROR",
        description: "Some error occurred",
      });
    }
  };
  

