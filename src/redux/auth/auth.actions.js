import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, meApi } from "../../api/auth.api";
import { toast } from "react-toastify";
import { paths, pathsAccordingToRole } from "../../constants/paths";

// Runs on app load/refresh to check if session cookie is valid
export const bootstrapAuthAction = createAsyncThunk(
  "auth/bootstrapAuthAction",
  async (payload, { rejectWithValue }) => {
    const navigate = payload?.navigate;
    try {
      const res = await meApi();

      if (navigate) {
        const role = res.data?.details?.role;
        navigate(pathsAccordingToRole[role] || paths.home);
      }

      return res.data.details; // user object
    } catch (err) {
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  },
);

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (payload, { rejectWithValue, dispatch }) => {
    const navigate = payload.navigate;

    try {
      const res = await loginApi(payload.reqPayload);
      await dispatch(bootstrapAuthAction({ navigate }));
      toast.success("Login successful");
      return res.data;
    } catch (err) {
      toast.error("Login failed");
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const logoutAction = createAsyncThunk(
  "auth/logoutAction",
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
      return true;
    } catch (err) {
      toast.error("Logout Failed!");
      return rejectWithValue(err?.response?.data || "Logout failed");
    }
  },
);
