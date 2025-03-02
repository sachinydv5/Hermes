import { OrderCreateRequest,AppConfigRequest, AppConfigResponse, ERROR_RESPONSE, GetAddToWishlistRequest, GetAddToWishlistResponse, GetProductIdRequest, GetProductIdResponse, GetProductRequest, GetProductResponse, GetWishlistRequest, GetWishlistResponse, ProductRequest, ProductResponse, UpdateAppConfigRequest, UpdateAppConfigResponse, UserLoginRequest, UserLoginResponse, UserLogoutRequest, UserLogoutResponse, UserSignUpRequest, UserSignUpResponse, OrderCreateResponse, PaymentCreateResponse, PaymentCreateRequest } from "./types";

import axios, { AxiosResponse } from 'axios';


const endpoint = "http://localhost:3002";

type API_REQUEST = UserSignUpRequest | UserLoginRequest | UserLogoutRequest | ProductRequest | ProductResponse | UpdateAppConfigRequest | AppConfigRequest | GetAddToWishlistRequest | OrderCreateRequest | PaymentCreateRequest;
type API_RESPONSE = UserSignUpResponse | UserLoginResponse | UserLogoutResponse | ProductResponse | GetProductResponse | UpdateAppConfigResponse | AppConfigResponse | ERROR_RESPONSE |GetAddToWishlistResponse | OrderCreateResponse | PaymentCreateResponse;

export function callApi(request: UserSignUpRequest, url: "/api/signup"): Promise<UserSignUpResponse | ERROR_RESPONSE>;
export function callApi(request: UserLoginRequest, url: "/api/login"): Promise<UserLoginResponse | ERROR_RESPONSE>;
export function callApi(request: UserLogoutRequest, url: "/api/logout"): Promise<UserLogoutResponse | ERROR_RESPONSE>;
export function callApi(request: ProductRequest, url: "/product/addProduct"): Promise<ProductResponse | ERROR_RESPONSE>;
export function callApi(request: GetProductRequest, url: "/product/getProduct"): Promise<GetProductResponse | ERROR_RESPONSE>;
export function callApi(request: UpdateAppConfigRequest, url: "/appConfig"): Promise<UpdateAppConfigResponse | ERROR_RESPONSE>;
export function callApi(request: AppConfigRequest, url: "/appConfig"): Promise<AppConfigResponse | ERROR_RESPONSE>;
export function callApi(request:GetAddToWishlistRequest, url: "/wishlist/add"): Promise<GetAddToWishlistResponse | ERROR_RESPONSE>;
export function callApi(request:GetAddToWishlistRequest, url: "/wishlist/remove"): Promise<GetAddToWishlistResponse | ERROR_RESPONSE>;
export function callApi(request:OrderCreateRequest, url: "/order/create"): Promise<OrderCreateResponse | ERROR_RESPONSE>;
export function callApi(request:GetAddToWishlistRequest, url: "/cart/add"): Promise<GetAddToWishlistResponse | ERROR_RESPONSE>;
export function callApi(request:PaymentCreateRequest, url: "/payment/create"): Promise<PaymentCreateResponse | ERROR_RESPONSE>;


export async function callApi(request: API_REQUEST, url: string): Promise<API_RESPONSE> {
  try {
    const config = {
      method: 'post',
      url: endpoint+url,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': "Bearer "+ localStorage.getItem("token")
      },
      data: request,
    };
    const response: AxiosResponse<API_RESPONSE> = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
  }
}


export async function getProductIdRequest(request: GetProductIdRequest, url: string): Promise<GetProductIdResponse> {
  try {
    const response: AxiosResponse<GetProductIdResponse> = await axios.get(endpoint + url);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
  }
}

/**
 * Fetches the user's wishlist from the API
 * This function should be used sparingly, prefer using the wishlistCache utility
 */
export async function getWishlist(request: GetWishlistRequest, url: string): Promise<GetWishlistResponse> {
    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: endpoint+url,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': "Bearer "+ localStorage.getItem("token")
        },
        // data: data,
      };
  
      const response = await axios.request(config);
      // Removed console.log to prevent triggering unnecessary renders
      return response.data;
    } 
   catch (error) {
    console.error('Error making GET request to wishlist API:', error);
    return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
  }
}




export async function getProduct(request: GetProductRequest, url: string): Promise<GetProductResponse > {
  try {
    const config = {
      method: 'get',
      url: endpoint+url,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': "Bearer "+ localStorage.getItem("token")
      },
      // data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } 
 catch (error) {
  console.error('Error making POST request:', error);
  return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
}
}


// get carty

export async function getCart(request: GetWishlistRequest, url: string): Promise<GetWishlistResponse> {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: endpoint+url,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': "Bearer "+ localStorage.getItem("token")
      },
      // data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } 
 catch (error) {
  console.error('Error making POST request:', error);
  return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
}
}

