import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./auth.actions";

const initialState = {
  authUser: null,
  authStatus: "loading", // idle | loading | authenticated | unauthenticated
  authError: null,

  tenantId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // optional: if you want a manual reset
    clearAuthError(state) {
      state.authError = null;
    },
    updateTenantId(state, action) {
      state.tenantId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // bootstrapAuthAction
      .addCase(actions.bootstrapAuthAction.pending, (state) => {
        state.authStatus = "loading";
        state.authError = null;
      })
      .addCase(actions.bootstrapAuthAction.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.authStatus = "authenticated";
      })
      .addCase(actions.bootstrapAuthAction.rejected, (state) => {
        state.authUser = null;
        state.authStatus = "unauthenticated";
      });

    // login
    builder
      .addCase(actions.loginAction.pending, (state) => {
        // state.authStatus = "loading";
        state.authError = null;
      })
      .addCase(actions.loginAction.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.authStatus = "authenticated";
      })
      .addCase(actions.loginAction.rejected, (state, action) => {
        state.authUser = null;
        state.authStatus = "unauthenticated";
        state.authError = action.payload || "Login failed";
      });

    // logout
    builder.addCase(actions.logoutAction.fulfilled, (state) => {
      state.authUser = null;
      state.authStatus = "unauthenticated";
    });
  },
});

export const authSelector = (st) => st.auth;
export const { clearAuthError, updateTenantId } = authSlice.actions;
export default authSlice.reducer;
