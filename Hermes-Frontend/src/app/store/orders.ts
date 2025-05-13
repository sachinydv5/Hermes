import { getOrders } from "@/api/api";
import { Product } from "@/api/common.types";
import { GetOrderResponse, GetOrderRequest } from "@/api/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Order {
  products: Product[];
  totalAmount: number;
  orderStatus: string;
  address: {
    city: string;
    country: string;
    pincode: string;
    addressLine1?: string;
    addressLine2?: string;
  };
  lastUpdatedTime: Date;
  updateTrace: Array<{
    updatedBy: "DASHBOARD" | "SYSTEM";
    time: Date;
  }>;
  userEmail: string;
  orderId: string;
}

interface OrdersSliceState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersSliceState = {
  orders: [],
  loading: false,
  error: null
};

export const fetchOrders = createAsyncThunk<Order[], void>(
  'orders/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrders({} as GetOrderRequest, "/order/all");
      if ('orders' in response) {
        return response.orders;
      } else {
        return rejectWithValue(response.description || 'Failed to fetch orders');
      }
    } catch (error) {
      return rejectWithValue('Failed to fetch orders');
    }
  }
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch orders';
      });
  },
});

export default ordersSlice.reducer;