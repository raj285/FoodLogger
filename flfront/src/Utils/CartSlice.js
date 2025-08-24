import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk is used for API integration to ensure the cart state is always in sync with the database.
export const getCartData = createAsyncThunk(
  "cart/getCartData",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      if (!token) {
        return rejectWithValue("No authentication token found.");
      }

      const response = await axios.get("http://localhost:8080/cart/getCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.products; // Assuming the populated data is in a `products` key
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      // Logic for adding an item locally
      let flag = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productId._id === action.payload._id) {
          state.items[i].quantity++;
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        state.items.push({ productId: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // action.payload should be the product ID
      const newItems = state.items.filter(
        (item) => item.productId._id !== action.payload
      );
      state.items = newItems;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
