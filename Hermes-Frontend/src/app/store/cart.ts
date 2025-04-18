import { callApi, getCart } from "@/api/api";
import { Product } from "@/api/common.types";
import {  GetWishlistRequest, GetWishlistResponse } from "@/api/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface CartSliceState {
products:Product[];
}

const initialState: CartSliceState = {
products: [],
}



export const fetchProduct = createAsyncThunk('cart/fetchProducts',async ()=>{
  
  const response : GetWishlistResponse = await getCart({} as GetWishlistRequest, "/cart/get")
  return response;
})


export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        if ('wishlist' in action.payload) {
          state.products = action.payload.wishlist;
        }
      });
  },
 
})