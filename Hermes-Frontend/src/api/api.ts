import { ERROR_RESPONSE, GetProductRequest, GetProductResponse, ProductRequest, ProductResponse, UserLoginRequest, UserLoginResponse, UserLogoutRequest, UserLogoutResponse, UserSignUpRequest, UserSignUpResponse } from "./types";

import axios, { AxiosResponse } from 'axios';


const endpoint = "https://f32b-2406-7400-50-3132-e8e1-2aa-4d23-56de.ngrok-free.app";

type API_REQUEST = UserSignUpRequest | UserLoginRequest | UserLogoutRequest | ProductRequest | ProductResponse;
type API_RESPONSE = UserSignUpResponse | UserLoginResponse | UserLogoutResponse | ProductResponse | GetProductResponse | ERROR_RESPONSE;

export function callApi(request: UserSignUpRequest, url: "/api/signup"): Promise<UserSignUpResponse | ERROR_RESPONSE>;
export function callApi(request: UserLoginRequest, url: "/api/login"): Promise<UserLoginResponse | ERROR_RESPONSE>;
export function callApi(request: UserLogoutRequest, url: "/api/logout"): Promise<UserLogoutResponse | ERROR_RESPONSE>;
export function callApi(request: ProductRequest, url: "/api/product/addProduct"): Promise<ProductResponse | ERROR_RESPONSE>;
export function callApi(request: GetProductRequest, url: "/api/product/getProduct"): Promise<GetProductResponse | ERROR_RESPONSE>;

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
      console.log(JSON.stringify(response.data));
      return response.data;
    } 
   catch (error) {
    console.error('Error making POST request:', error);
    return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
  }
}