import { z } from "zod";
import { Error } from "../common/error";
import { ProductDO } from "../product/product";



type ORDER_ERROR_CODES = "INTERNAL_ERROR"

export const orderStatusEnum = z.enum([ "INITIATED", "ORDER_PLACED", "FAILURE", "IN_TRANSIT", "REACHED", "REFUNDED", "ABORTED", "CREATED", "PAYMENT_SUCCESS", "PAYMENT_FAILURE" ])

export type ORDER_STATUS = z.infer<typeof orderStatusEnum>


export const AddressSchema = z.object({
  city: z.string(),
  country: z.string(),
  pincode: z.string(),
  addressLine1: z.string().optional(), // Can be empty
  addressLine2: z.string().optional(), // Can be empty
});

export const updateOrderSchema = z.object({
  status: z.enum(["SUCCESS"]),
});



export const orderScheme = z.object({
  products: z.array(ProductDO),
  totalAmount: z.number(),
  // paymentGateway: z.array(z.object()),
  orderStatus: orderStatusEnum,
  address: AddressSchema,
  lastUpdatedTime: z.date(),
  updateTrace: z.array(z.object({
    updatedBy: z.enum(["DASHBOARD"]),
    time: z.date(),
  })),
  // invoice: z.object({}).optional(),
  userEmail: z.string(),
  orderId: z.string(),
});

export type ORDER = z.infer<typeof orderScheme>




export const orderRequestScheme = z.object({
  products: z.union([z.string(), z.array(z.string())]),
  // address: AddressSchema,
});


export type OrderCreateRequest = z.infer<typeof orderRequestScheme>

export type OrderCreateResponse = Error<ORDER_ERROR_CODES> | z.infer<typeof orderScheme>



export const orderStatusRequestSchema = z.object({
  orderId: z.string(),
});

export type OrderStatusRequest = z.infer<typeof orderStatusRequestSchema>

export type OrderStatusResponse = Error<ORDER_ERROR_CODES> | z.infer<typeof orderScheme>


export const updateOrderRequestSchema = z.object({
  orderId: z.string(),
  orderStatus: orderStatusEnum,
});

export type UpdateOrderRequest = z.infer<typeof updateOrderRequestSchema>

export type UpdateOrderResponse = Error<ORDER_ERROR_CODES> | z.infer<typeof updateOrderSchema>


