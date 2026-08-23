import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEventsApi,
  fetchEventsApi,
  updateEventsApi,
  assignEventApi,
  deleteEventsApi,
} from "../../api/events.api";
import { toast } from "react-toastify";
import { showErrorToast } from "../../utils/toast.utils";

import { paths } from "../../constants/paths";
// import { updateAllTaskInputs } from "../farms/farms.slice";
export const fetchEventsDispatch = createAsyncThunk(
  "auth/fetchEventsDispatch",
  async (payload, { rejectWithValue }) => {
    try {
      const searchVal = payload.searchText || "";
      const query = `?status=${payload.query}&searchText=${searchVal}`;
      const res = await fetchEventsApi(query);
      return res.data; // user object
    } catch (err) {
      showErrorToast(err, "Failed to fetch Events");
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

      // checkHere
      // // clear inputs once event is created
      // const state = getState();
      // const vendors = state.users.vendors;
      // // dispatch(updateAllTaskInputs(generateAddTaskInpMetadata(vendors)));
      return res.data;
    } catch (err) {
      showErrorToast(err, "Failed to create Events");
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
      payload.navigate(paths.eventsDashboard);
      return res.data;
    } catch (error) {
      showErrorToast(error, "Failed to update Events");
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
      res.data.reqPayload = payload.reqPayload;
      return res.data;
    } catch (err) {
      showErrorToast(err, "Failed to assign Event");
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
      showErrorToast(err, "Failed to delete event");
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  },
);

export const fetchEventDetailsAction = createAsyncThunk(
  "events/fetchEventDetailsAction",
  async (payload, { rejectWithValue }) => {
    try {
      const query = `?eventUid=${payload.eventUid}`;
      const res = await fetchEventsApi(query);
      return res.data.details?.events[0];
    } catch (err) {
      showErrorToast(err, "Failed to fetch event details");
      return rejectWithValue(err?.response?.data || "Something went wrong!");
    }
  },
);

export const eventsFilterAction = createAsyncThunk(
  "auth/eventsFilterAction",
  async (payload, { rejectWithValue }) => {
    try {
      const query = `?status=${payload
        .filter((fl) => fl.selected)
        .map((m) => m.value)
        .join(",")}`;
      const res = await fetchEventsApi(query);
      const k = {
        events: res.data.details?.events,
        statusCounts: res.data.details?.statusCounts,
        selectedEventFilters: payload,
      };
      return k;
    } catch (err) {
      showErrorToast(err, "Failed to fetch Events");
      return rejectWithValue(err?.response?.data || "Not authenticated");
    }
  },
);
