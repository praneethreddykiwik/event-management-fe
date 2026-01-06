import { createAsyncThunk } from "@reduxjs/toolkit";
import { declineTasksApi, fetchEventsAndTasksApi } from "../../api/tasks.api";

export const fetchEventsAndTasksAction = createAsyncThunk(
  "tasks/fetchEventsAndTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchEventsAndTasksApi(payload);
      // toast
      return res.data;
    } catch (err) {
      // toast
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);

export const declineTasksAction = createAsyncThunk(
  "tasks/declineTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await declineTasksApi(payload);
      debugger;
      return res.data;
    } catch (err) {
      // error
      debugger;
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);
