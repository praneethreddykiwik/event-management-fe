import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasksApi } from "../../api/tasks.api";

export const fetchTasksDispatch = createAsyncThunk(
  "auth/fetchTasksDispatch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchTasksApi();
      debugger;
      return res.data;
    } catch (err) {
      debugger;
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);
