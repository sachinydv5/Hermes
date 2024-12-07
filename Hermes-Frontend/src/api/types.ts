import { Product } from "./common.types"




// global error handling
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


// User SignUp Request


type USER_SIGNUP_ERROR_CODES = "SEND_EMAIL_ERROR" | "USER_NOT_FOUND" | "EMAIL_ALREADY_IN_USE" | "INVALID_EMAIL" | "PASSWORD_TOO_WEAK"

export type UserSignUpRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export type UserSignUpResponse = Error<USER_SIGNUP_ERROR_CODES> | {
  status: "USER_CREATED_SUCCESSFULLY",
  authToken: string
}


export type UserLoginRequest = {
    email: string;
    password: string;
}


type USER_LOGIN_ERROR_CODES = "INCORRECT_EMAIL_PROVIDED" | "INCORRECT_PHONE_PROVIDED" | "BAD_OTP_REQUEST" | "INVALID_OTP" | "OTP_EXPIRED"

export type UserLoginResponse = Error<USER_LOGIN_ERROR_CODES> | {
  status: "USER_LOGGED_IN",
  authToken: string,
  user: {
    firstName: string
  },
}


// User Logout 



type USER_LOGOUT_CODES = "INTERNAL_ERROR"

export type UserLogoutRequest = {} | undefined


export type UserLogoutResponse = Error<USER_LOGOUT_CODES> | {
  status: "USER_LOGGED_OUT"
}

// Product Schema


export type ProductRequest = {
    name: string;
    description: string;
    qty: number;
    duration: {
        value: number;
        unit: string;
    };
    discount: number;
    pickupAddress: {
        city: string;
        country: string;
        pincode: string;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
    };
    price: number;
    category: string;
    userId: string;
    collectionId: string;
    img?: string[] | undefined;
}


type PRODUCT_ERROR_CODES = "INTERNAL_ERROR"

export type ProductResponse = Error<PRODUCT_ERROR_CODES> | {
  status: "PRODUCT_ADDED_SUCCESSFULLY",
}


// Get Product Resonse 

type GET_PRODUCT_ERROR_CODES = "INTERNAL_ERROR"

export type GetProductRequest = {} | undefined

export type GetProductResponse = Error<GET_PRODUCT_ERROR_CODES> | {
    status: string;
    pageNo: number;
    pageSize: number;
    totalPages: number;
    lastRef?: string | undefined;
    products: Product[] 
}




// app config 


type APP_CONFIG_CODES = "INTERNAL_ERROR"

export type AppConfig = {
  primary_colour: string
}

export type AppConfigRequest = {} | undefined

export type AppConfigResponse = Error<APP_CONFIG_CODES> | {
  status: "SUCCESS",
  config: AppConfig,
}

// update app config
type UPDATE_APP_CONFIG_CODES = "INTERNAL_ERROR"

export type UpdateAppConfigRequest = Partial<AppConfig>;

export type UpdateAppConfigResponse = Error<UPDATE_APP_CONFIG_CODES> | {
  status: "SUCCESS",
}


