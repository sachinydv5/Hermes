import { z } from "zod";
import { Error, GLOBAL_ERROR_CODE } from "../common/error";


export const CollectionRequestDTO = z.object({
    collectionName:z.string(),
    collectionDescription:z.string(),
    isCollectionEnabled: z.boolean().optional(),
    category:z.string(),
    productId: z.array(z.string()).min(0).optional(),
    userId: z.string().uuid()
})


export const CollectionDo = z.object({
    id: z.string(),
    collectionName:z.string(),
    collectionDescription:z.string(),
    isCollectionEnabled: z.boolean(),
    category:z.string(),
    productId: z.array(z.string()).min(0).optional(),
    userId: z.string().uuid()
}) 

export const CollectionResponseDTO = z.object({
    status: z.string(),
    collectionsList: z.array(CollectionDo).optional()
})

export type CollectionRequestDTOSchema = z.infer<typeof CollectionRequestDTO>;

export type CollectionResponseDTOSchema = Error<GLOBAL_ERROR_CODE> | z.infer<typeof CollectionResponseDTO>;

export type CollectionDoSchema = z.infer<typeof CollectionDo>