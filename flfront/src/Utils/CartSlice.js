import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    CartProdutctsArray: [],
  },
  reducers: {
    addItem: (state, action) => {
        state.CartProdutctsArray.push(action.payload);
    },
    removeItem: (state, action) => {
        for(let i=0 ; i<state.CartProdutctsArray.length-1 ; i++){
            if(state.CartProdutctsArray[i]===action.payload){
                for(let j=i ; j<state.CartProdutctsArray.length-1 ; i++){
                    state.CartProdutctsArray[j] =
                      state.CartProdutctsArray[j + 1];
                }
                break;
            }
        }
        state.CartProdutctsArray.pop();
    },
    clearCart: (state, action) => {
        state.CartProdutctsArray.length=0;
    },

  },
});
export const {addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;