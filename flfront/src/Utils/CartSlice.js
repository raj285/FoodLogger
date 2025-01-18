import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    CartProdutctsArray: [],
    itemFrequency: [],
    totalFrequency:0
  },
  reducers: {
    addItem: (state, action) => {
      let flag=0;
      state.totalFrequency++;
      for (let i = 0; i < state.CartProdutctsArray.length; i++) {
        // as === will not work like in remove item y?
        // In JavaScript, === checks for object reference equality (not value equality). 
        // Even if two objects have identical properties, 
        // they are not considered equal unless they reference the exact same memory location.
        if (state.CartProdutctsArray[i]._id === action.payload._id) {
          state.itemFrequency[i]++;
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        state.CartProdutctsArray.push(action.payload);
        state.itemFrequency.push(1);
      }
    },
    removeItem: (state, action) => {
      state.totalFrequency--;
      for (let i = 0; i < state.CartProdutctsArray.length - 1; i++) {
        if (state.CartProdutctsArray[i] === action.payload) {
          for (let j = i; j < state.CartProdutctsArray.length - 1; i++) {
            state.CartProdutctsArray[j] = state.CartProdutctsArray[j + 1];
            state.itemFrequency[j] = state.itemFrequency[j + 1];
          }
          break;
        }
      }
      state.CartProdutctsArray.pop();
      state.itemFrequency.pop();
    },
    clearCart: (state, action) => {
      state.totalFrequency=0;
      state.CartProdutctsArray.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
