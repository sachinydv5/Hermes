export type GLOBAL_ERROR_CODE = "INTERNAL_SERVER_ERROR" | "UNAUTHORIZED"

export type Error<P> = {
  error_code: GLOBAL_ERROR_CODE | P,
  description: string,
  body?: any
}

export type ERROR_RESPONSE = {
  error_code: GLOBAL_ERROR_CODE,
  description: string
}