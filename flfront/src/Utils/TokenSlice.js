import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};
// The !! (double NOT) is a trick to convert any value into a boolean:
//  a common way to check whether the user is authenticated based on the presence of a token in localStorage.
const TokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload); // Save token to localStorage
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Clear token from localStorage
    },
  },
});


export const { login, logout } = TokenSlice.actions;
export default TokenSlice.reducer;
