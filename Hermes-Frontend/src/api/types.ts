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
    first_name: string
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
    price: string;
    category: string;
    userId: string;
    collectionId: string;
    img?: string[] | undefined;
}


type PRODUCT_ERROR_CODES = "INTERNAL_ERROR"

export type ProductResponse = Error<PRODUCT_ERROR_CODES> | {
  status: "PRODUCT_ADDED_SUCCESSFULLY",
  id: string
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


// Get Product ID Resonse 

type GET_PRODUCT_ID_ERROR_CODES = "INTERNAL_ERROR"

export type GetProductIdRequest = {} | undefined

export type  GetProductIdResponse = Error<GET_PRODUCT_ID_ERROR_CODES > | Product


//  get wishlist
 
type GET_Wishlist_ERROR_CODES  = "INTERNAL_ERROR"

export type GetWishlistRequest = {} | undefined

export type  GetWishlistResponse = Error<GET_Wishlist_ERROR_CODES > | {
  wishlist: Product[] 
}


// ADD WISHLIST Resonse 

type GET_ADDTOWISHLIST_ERROR_CODES = "INTERNAL_ERROR"

export type GetAddToWishlistRequest = {
  productId: string,
} 

export type GetAddToWishlistResponse = Error<GET_ADDTOWISHLIST_ERROR_CODES> | {
  status: string
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


// order create 
type ORDER_CREATE_CODES = "INTERNAL_ERROR"
 
export type OrderCreateRequest = {
  products: string | string[];
}

export type OrderCreateResponse = Error<ORDER_CREATE_CODES> | {
  products: {
    id: string;
    description: string;
    name: string;
    img?: string[];
    duration: any; // Replace with DurationSchema type
    discount: number;
    pickupAddress: any; // Replace with PickupAddressSchema type
    price: string;
    qty: number;
    category: string;
    userId: string;
    collectionId: string;
    createTs: string;
  }[];
  totalAmount: number;
  orderStatus:
    | "INITIATED"
    | "ORDER_PLACED"
    | "FAILURE"
    | "IN_TRANSIT"
    | "REACHED"
    | "REFUNDED"
    | "ABORTED"
    | "CREATED"
    | "PAYMENT_SUCCESS"
    | "PAYMENT_FAILURE";
  address: {
    city: string;
    country: string;
    pincode: string;
    addressLine1?: string;
    addressLine2?: string;
  };
  lastUpdatedTime: Date;
  updateTrace: {
    updatedBy: "DASHBOARD";
    time: Date;
  }[];
  userEmail: string;
  orderId: string;
  status: "SUCCESS";
};





export type PaymentCreateRequest = {
  orderId: string;
}


export type PaymentCreateResponse =  Error<ORDER_CREATE_CODES> | {
  url: string;
  status: "SUCCESS",

}


export type OrderStatusRequest = {
  orderId: string;
}

export type OrderStatusResponse = OrderCreateResponse


// image upload type
export type PRODUCT_IMAGE_ERROR_CODE = "IMAGE_URL_NOT_FOUND"


export type UploadProductImageRequest = {
  image: string[];
}

export type UploadProductImageRespose = Error<GLOBAL_ERROR_CODE> | Error<PRODUCT_IMAGE_ERROR_CODE> | {
  status: "IMAGE_UPLOAD_SUCCESFULL",
  url: string
}

//User Type
export type GetUserRequest = {
  email:string,
} 

export type  GetUserResponse = Error<GLOBAL_ERROR_CODE> | {
  email: string;
  first_name: string;
  last_name: string;
  display_name: string;
  is_email_verified: boolean;
  user_id: string;
  image_url?: string | undefined;
} 

//cart type

export type GetCartRequest = {} | undefined

export type  GetCartResponse = Error<GLOBAL_ERROR_CODE> | {
 Cart: Product[] 
}