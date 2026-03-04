import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./auth.actions";
import { ROLE_PERMISSIONS } from "../../RBAC/permissions";

const initialState = {
  authUser: null,
  authStatus: "loading", // idle | loading | authenticated | unauthenticated
  authError: null,

  // response details from /me api
  uid: "",
  username: "",
  email: "",
  role: "",
  status: "",
  tenantId: "",
  tenantUid: "",
  sessionID: "",

  // RBAC
  roles: ["manager"],
  permissions: [],
  isAuthReady: false,
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
      state.tenantId = action.payload; // this will get triggered when url gets a tenantId
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
        const role = action.payload.role;

        state.permissions = ROLE_PERMISSIONS[role];
        state.isAuthReady = true;
        state.authStatus = "authenticated";

        state.uid = action.payload.uid;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.status = action.payload.status;
        state.tenantId = action.payload.tenantId;
        state.tenantUid = action.payload.tenantUid;
        state.sessionID = action.payload.sessionID;
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
        // state.authUser = action.payload;
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

export const selectPermissions = (s) => s.auth.permissions;
export const selectIsAuthReady = (s) => s.auth.isAuthReady;
// export const RBAC = (permissions, perm) => permissions.includes(perm);

export const authSelector = (st) => st.auth;
export const { clearAuthError, updateTenantId } = authSlice.actions;
export default authSlice.reducer;
