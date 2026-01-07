import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  declineTasksApi,
  fetchEventsAndTasksApi,
  acceptTasksApi,
  createTasksApi,
} from "../../api/tasks.api";
import { toast } from "react-toastify";

export const fetchEventsAndTasksAction = createAsyncThunk(
  "tasks/fetchEventsAndTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchEventsAndTasksApi(payload);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to load Events & Tasks"
      );
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
      toast.success("Task declined successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to decline task"
      );
      debugger;
      toast.error(err?.response?.data?.message || "Failed to decline task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);

export const acceptTasksAction = createAsyncThunk(
  "tasks/acceptTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await acceptTasksApi(payload);
      debugger;
      toast.success("Task accepted successfully");
      return res.data;
    } catch (err) {
      debugger;
      toast.error(err?.response?.data?.message || "Failed to accept task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);

export const createTaskAction = createAsyncThunk(
  "tasks/createTaskAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await createTasksApi(payload.reqPayload);
      debugger;
      toast.success("Task created successfully");
      return res.data;
    } catch (err) {
      debugger;
      toast.error(err?.response?.data?.message || "Failed to create Task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  }
);
