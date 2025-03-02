import { z } from "zod";

import { Error } from "../common/error";


type PAYMENT_ERROR_CODES = "INTERNAL_ERROR"


export const paymentRequestScheme = z.object({
  orderId: z.string(),
});


export type PaymentRequest = z.infer<typeof paymentRequestScheme>

export const PaymentLinkSchema = z.object({
  url: z.string(),
  status: z.string(),
});

export type PaymentLinkResponse = z.infer<typeof PaymentLinkSchema>


export type PaymentResponse = Error<PAYMENT_ERROR_CODES> | PaymentLinkResponse



