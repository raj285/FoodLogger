import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./TokenSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default appStore;
