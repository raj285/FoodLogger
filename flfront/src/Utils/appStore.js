import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./TokenSlice";
import cartReducer from "./CartSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    cart:cartReducer,
  },
});

export default appStore;
 