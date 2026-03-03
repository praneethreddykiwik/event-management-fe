import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEventsApi, fetchEventsApi } from "../../api/events.api";
import { toast } from "react-toastify";
import { paths } from "../../constants/paths";

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
  },
);

export const createEventsDispatch = createAsyncThunk(
  "events/createEventsDispatch",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await createEventsApi(payload.reqPayload);
      toast.success("created Events successfully");
      payload.navigate(paths.eventsDashboard);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to create Events",
      );
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  },
);
