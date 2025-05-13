import { getCart } from "@/api/api";
import { Product } from "@/api/common.types";
import {  GetCartResponse, GetCartRequest} from "@/api/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";



interface CartSliceState {
products:Product[];

}

const initialState: CartSliceState = {
products: [],
}



export const fetchProduct = createAsyncThunk<Product[], void>('cart/fetchProducts',async ()=>{
  
  const response : GetCartResponse  = await getCart({} as  GetCartRequest, "/cart/get")
  console.log("API RESPONSE",response)
  if ('cart' in response) {
    return response.cart; 
  } else {
    console.error("Error fetching wishlist:", response);
    return []; 
  }
})

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    descreseItem: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        if (product.qty > 1) {
          product.qty -= 1; // just decrease quantity
        } 
      } 
    },
    removeItemCompletely: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    increaseItemQty: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.qty += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
          state.products = action.payload;
        
      });
  },
 
})

export const selectCartCount = (state: RootState)=> state.cart.products.length;
export const {descreseItem ,removeItemCompletely, increaseItemQty} = cartSlice.actions;
export default cartSlice.reducer;