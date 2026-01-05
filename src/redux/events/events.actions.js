import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventsApi } from "../../api/events.api";

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
