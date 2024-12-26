import { z } from 'zod';

export type GLOBAL_ERROR_CODE = "INTERNAL_SERVER_ERROR" | "UNAUTHORIZED" | "BAD_REQUEST";


export type Error<P> = {
  error_code: GLOBAL_ERROR_CODE | P,
  description: string,
  body?: any
}

export type ERROR_RESPONSE = {
  error_code: GLOBAL_ERROR_CODE,
  description: string
}

export class CommonException<P> extends Error{
  error_code: GLOBAL_ERROR_CODE | P;
  description: string;

  constructor(error_code: GLOBAL_ERROR_CODE | P, description: string) {
      super(description);
      this.name = "ERROR_RESPONSE";
      this.error_code = error_code;
      this.description = description;
  }
}

export const emptyObject = z.object({}).optional();
