import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventsAndTasksApi } from "../../api/tasks.api";

export const fetchEventsAndTasksAction = createAsyncThunk(
  "tasks/fetchEventsAndTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchEventsAndTasksApi(payload);
      return res.data;
    } catch (err) {
      debugger;
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);
