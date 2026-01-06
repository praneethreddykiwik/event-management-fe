import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEventsApi, fetchEventsApi } from "../../api/events.api";
import { toast } from "react-toastify";

export const fetchEventsDispatch = createAsyncThunk(
  "auth/fetchEventsDispatch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchEventsApi();
      return res.data; // user object
    } catch (err) {
      // error toast
      toast.error("Failed to fetch Events");
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
      // success toast
      return res.data;
      // error toast
    } catch (err) {
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  }
);
