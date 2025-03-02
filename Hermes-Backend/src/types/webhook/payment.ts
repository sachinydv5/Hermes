import { z } from "zod";

export const paymentQuerySchema = z.object({
    orderID: z.string().min(1, "orderID is required"),
    success: z.union([
      z.literal("true").transform(() => true),
      z.literal("false").transform(() => false),
    ]),
  });

export type PAYMENT_QUERY = z.infer<typeof paymentQuerySchema>



export type PaymentQueryRequest = z.infer<typeof paymentQuerySchema>

export const PaymentLinkSchema = z.object({
  url: z.string(),
});



export const PaymentLinkResponseSchema = z.object({
  error: z.string().optional().nullable(),
  received: z.boolean().optional().nullable()

});

export type PaymentQueryResponse = z.infer<typeof PaymentLinkResponseSchema>



