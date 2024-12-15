import { z } from "zod";
import { Error, GLOBAL_ERROR_CODE } from "../common/error";

// Schema for the duration object
export const DurationSchema = z.object({
  value: z.number().nonnegative().min(1),
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
  img: z.array(z.string()).min(0).optional(), // img can be an empty array
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
  img: z.array(z.string()).min(0).optional(), // img can be an empty array
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
