import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./auth.actions";

const initialState = {
  user: null,
  status: "loading", // idle | loading | authenticated | unauthenticated
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // optional: if you want a manual reset
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // bootstrapAuthAction
      .addCase(actions.bootstrapAuthAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actions.bootstrapAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "authenticated";
      })
      .addCase(actions.bootstrapAuthAction.rejected, (state) => {
        state.user = null;
        state.status = "unauthenticated";
      })

      // login
      .addCase(actions.loginAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actions.loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "authenticated";
      })
      .addCase(actions.loginAction.rejected, (state, action) => {
        state.user = null;
        state.status = "unauthenticated";
        state.error = action.payload || "Login failed";
      })

      // logout
      .addCase(actions.logoutAction.fulfilled, (state) => {
        state.user = null;
        state.status = "unauthenticated";
      });
  },
});

export const authSelector = (st) => st.auth;
export const { clearAuthError } = authSlice.actions;
export default authSlice.reducer;
