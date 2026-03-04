import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEventsApi,
  fetchEventsApi,
  updateEventsApi,
  assignEventApi,
  deleteEventsApi,
} from "../../api/events.api";
import { toast } from "react-toastify";

import { paths } from "../../constants/paths";
import { updateAllTaskInputs } from "../farms/farms.slice";
import { generateAddEventInpMetadata } from "../farms/metadata/task.metadata";

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
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await createEventsApi(payload.reqPayload);
      toast.success("Created Events successfully");
      payload.navigate(paths.eventsDashboard);

      // clear inputs once event is created
      const state = getState();
      const vendors = state.users.vendors;
      debugger;
      dispatch(updateAllTaskInputs(generateAddEventInpMetadata(vendors)));
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
      const res = await updateEventsApi(payload.reqPayload);
      toast.success("Updated Event successfully");

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

export const assignEventAction = createAsyncThunk(
  "events/assignEvent",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await assignEventApi(payload.reqPayload);
      toast.success("Assign Event successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to assign Event",
      );
      return rejectWithValue(err?.response?.data || "Something went wrong!");
    }
  },
);

export const deleteEventDispatch = createAsyncThunk(
  "events/deleteEventDispatch",
  async (payload, { rejectWithValue }) => {
    try {
      await deleteEventsApi(payload);

      toast.success("Event deleted successfully");
      return payload;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete event",
      );
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  },
);
