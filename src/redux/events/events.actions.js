import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEventsApi, fetchEventsApi } from "../../api/events.api";

export const fetchEventsDispatch = createAsyncThunk(
  "auth/fetchEventsDispatch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchEventsApi();
      return res.data; // user object
    } catch (err) {
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  }
);

export const createEventsDispatch = createAsyncThunk(
  "events/createEventsDispatch",
  async (payload, { rejectWithValue }) => {
    try {
      debugger;
      const res = await createEventsApi(payload.reqPayload);
      debugger;
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  }
);
