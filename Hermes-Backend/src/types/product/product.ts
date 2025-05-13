import { z } from "zod";
import { Error, GLOBAL_ERROR_CODE } from "../common/error";

// Schema for the duration object
export const DurationSchema = z.object({
  value: z.number().nonnegative().min(1).nullable(),
  unit: z.string(),
});

// Schema for the pickup address object
export const PickupAddressSchema = z.object({
  city: z.string(),
  country: z.string(),
  pincode: z.string(),
  addressLine1: z.string().optional(), // Can be empty
  addressLine2: z.string().optional(), // Can be empty
});

// Main schema for the product/item object
export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  img: z.string().optional(), // img can be an empty array
  qty: z.number(), // Can be empty string
  duration: DurationSchema, // Nested duration object
  discount: z.number(),
  pickupAddress: PickupAddressSchema, // Nested address object
  price: z.string(),
  category: z.string(),
  userId: z.string(),
  collectionId: z.string(),
});

export const ProductDO = z.object({
  id: z.string().uuid(),
  description: z.string(),
  name:z.string(),
  image: z.string().optional(), // img can be an empty array
  duration: DurationSchema, // Nested duration object
  discount: z.number(),
  pickupAddress: PickupAddressSchema, // Nested address object
  price: z.string(),
  qty: z.number().min(1), // Can be empty string
  category: z.string().uuid(),
  userId: z.string().uuid(),
  collectionId: z.string().uuid(),
  createTs: z.string().date()
})


export const GetProductResponse = z.object({
  status:z.string(),
  pageNo:z.number(),
  pageSize: z.number(),
  totalPages:z.number(),
  products: z.array(ProductDO).min(0),
  lastRef: z.string().optional(),
});


export type GetProductDoResponse =Error<GLOBAL_ERROR_CODE> | z.infer<typeof GetProductResponse>;

export type ProductDoSchema = z.infer<typeof ProductDO>;

export type ProductRequestSchema = z.infer<typeof ProductSchema>;

export type AddProductResponseSchema = Error<GLOBAL_ERROR_CODE> | {
  status: "PRODUCT_ADDED_SUCCESSFULLY",
  id: string
}



export type GetProductIdRequest = {}


export type GetProductIdRespose = Error<GLOBAL_ERROR_CODE> | ProductDoSchema

export type PRODUCT_IMAGE_ERROR_CODE = "IMAGE_NOT_FOUND" 


export type UploadProductImageRequest = {
  image: Express.Multer.File
}


export type UploadProductImageRespose = Error<GLOBAL_ERROR_CODE> | Error<PRODUCT_IMAGE_ERROR_CODE> | {
  status: "IMAGE_UPLOAD_SUCCESFULL",
  urls: string[]
}
