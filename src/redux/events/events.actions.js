import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEventsApi,
  fetchEventsApi,
  updateEventsApi,
} from "../../api/events.api";
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

export const updateEventDispatch = createAsyncThunk(
  "events/updateEventDispatch",
  async (payload, { rejectWithValue }) => {
    try {
      const updateEventPayload = { ...payload };
      delete updateEventPayload.navigate;

      const res = await updateEventsApi(updateEventPayload);
      toast.success("updated Event successfully");

      payload.navigate(paths.events);
      return res.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to create Events",
      );
      return rejectWithValue(error?.response?.data || "Not authenticated");
    }
  },
);
