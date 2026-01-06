import { createAsyncThunk } from "@reduxjs/toolkit";
import { declineTasksApi, fetchEventsAndTasksApi } from "../../api/tasks.api";

export const fetchEventsAndTasksAction = createAsyncThunk(
  "tasks/fetchEventsAndTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchEventsAndTasksApi(payload);
      return res.data;
    } catch (err) {
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
      debugger;
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);
