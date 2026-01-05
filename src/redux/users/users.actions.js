import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, getUsersApi } from "../../api/users.api";
import { roles } from "../../constants/roles";

export const fetchManagersAction = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${roles.eventManager}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      debugger;
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  }
);

export const registrationAction = createAsyncThunk(
  "auth/registrationAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await createUserApi(payload.reqPayload);
      return res.data; // user object (or any success response)
    } catch (err) {
      debugger;
      return rejectWithValue(err?.response?.data || "Registration failed");
    }
  }
);
