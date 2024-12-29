import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  firstName:localStorage.getItem("firstName")||null
};
// The !! (double NOT) is a trick to convert any value into a boolean:
//  a common way to check whether the user is authenticated based on the presence of a token in localStorage.
const TokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.firstName=action.payload.firstName;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token); // Save token to localStorage
      localStorage.setItem("firstName", action.payload.firstName);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.firstName = null; // Clear firstName from state
      localStorage.removeItem("token"); // Clear token from localStorage
      localStorage.removeItem("firstName"); // Clear firstName from localStorage
    },
  },
});


export const { login, logout } = TokenSlice.actions;
export default TokenSlice.reducer;
