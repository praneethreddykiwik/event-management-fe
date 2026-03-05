import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserApi,
  getEventManagersApi,
  getUsersApi,
  updateUserApi,
  userDeleteApi,
} from "../../api/users.api";
import { roles } from "../../constants/roles";
import { toast } from "react-toastify";

export const fetchManagersAction = createAsyncThunk(
  "users/fetchManagersAction",
  async (payload, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${roles.eventManager}`;
      const res = await getEventManagersApi(query);

      if (payload?.callback) {
        payload.callback(res.data.details);
      }
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch managers",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const fetchAllUsersAction = createAsyncThunk(
  "users/fetchAllUsersAction",
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to fetch Users",
      );
      return rejectWithValue(err?.response?.data || "Fetch users failed");
    }
  },
);

export const fetchVendorsAction = createAsyncThunk(
  "users/fetchVendorsAction",
  // http://localhost:4000/v1/users?tenantId=tenant_001&role=vendor
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${roles.vendor}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch managers",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const registrationAction = createAsyncThunk(
  "auth/registrationAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await createUserApi(payload.reqPayload);
      toast.success("registration successful");
      return res.data; // user object (or any success response)
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Registration failed",
      );
      return rejectWithValue(err?.response?.data || "Registration failed");
    }
  },
);

// shahid
export const deleteUserAction = createAsyncThunk(
  "auth/deleteUserAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await userDeleteApi(payload);
      toast.success("user deleted successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to delete user",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const updateUserAction = createAsyncThunk(
  "auth/updateUserAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await updateUserApi(payload);
      toast.success("Users updated successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to update user",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);
