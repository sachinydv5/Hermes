import { z } from "zod";
import { Error } from "../common/error";

// Schema for the duration object
export const DurationSchema = z.object({
  value: z.number(),
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
  price: z.number(),
  category: z.string().uuid(),
  userId: z.string().uuid(),
  collectionId: z.string().uuid(),
});

export const ProductDO = z.object({
  id: z.string().uuid(),
  description: z.string(),
  img: z.array(z.string()).min(0).optional(), // img can be an empty array
  qty: z.number(), // Can be empty string
  duration: DurationSchema, // Nested duration object
  discount: z.number(),
  pickupAddress: PickupAddressSchema, // Nested address object
  price: z.number(),
  category: z.string().uuid(),
  userId: z.string().uuid(),
  collectionId: z.string().uuid(),
})

export type ProductDoSchema = z.infer<typeof ProductDO>;

export type ProductRequestSchema = z.infer<typeof ProductSchema>;

export type ERROR_CODE = "INTERNAL_SERVER_ERROR" | "UNAUTHORIZED";

export type ProductResponseSchema = Error<ERROR_CODE> | {
  status: "PRODUCT_ADDED_SUCCESSFULLY",
}
