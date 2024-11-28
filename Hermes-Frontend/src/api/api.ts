import { ERROR_RESPONSE, GetProductRequest, GetProductResponse, ProductRequest, ProductResponse, UserLoginRequest, UserLoginResponse, UserLogoutRequest, UserLogoutResponse, UserSignUpRequest, UserSignUpResponse } from "./types";

import axios, { AxiosResponse } from 'axios';


const endpoint = "https://hermes-backend-pykc.onrender.com";

type API_REQUEST = UserSignUpRequest | UserLoginRequest | UserLogoutRequest | ProductRequest | ProductResponse;
type API_RESPONSE = UserSignUpResponse | UserLoginResponse | UserLogoutResponse | ProductResponse | GetProductResponse | ERROR_RESPONSE;

export function callApi(request: UserSignUpRequest, url: "/api/signup"): Promise<UserSignUpResponse | ERROR_RESPONSE>;
export function callApi(request: UserLoginRequest, url: "/api/login"): Promise<UserLoginResponse | ERROR_RESPONSE>;
export function callApi(request: UserLogoutRequest, url: "/api/logout"): Promise<UserLogoutResponse | ERROR_RESPONSE>;
export function callApi(request: ProductRequest, url: "/api/product/addProduct"): Promise<ProductResponse | ERROR_RESPONSE>;
export function callApi(request: GetProductRequest, url: "/api/product/getProduct"): Promise<GetProductResponse | ERROR_RESPONSE>;

export async function callApi(request: API_REQUEST, url: string): Promise<API_RESPONSE> {
  try {
    const response: AxiosResponse<API_RESPONSE> = await axios.post(endpoint + url, request);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    return { error_code: "INTERNAL_SERVER_ERROR", description: "API Call Failure" } as ERROR_RESPONSE;
  }
}


