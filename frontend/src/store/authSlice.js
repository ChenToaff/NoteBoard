import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: true, // Indicates that the authentication check is in progress
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    checkAuth: (state, action) => {
      state.isAuthenticated = action.payload;
      state.loading = false;
    },
    authCheckStart: (state) => {
      state.loading = true;
    },
  },
});

export const { login, logout, checkAuth, authCheckStart } = authSlice.actions;
export default authSlice.reducer;
