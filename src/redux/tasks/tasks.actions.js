import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  declineTasksApi,
  fetchEventsAndTasksApi,
  acceptTasksApi,
  createTasksApi,
  editTasksApi,
  fetchTasksApi,
  deleteTasksApi,
  fetchQaEventsAndTasksApi,
  fetchTaskApi,
} from "../../api/tasks.api";
import { toast } from "react-toastify";
import { clearTaskInputs } from "../farms/farms.slice";

export const fetchTaskAction = createAsyncThunk(
  "tasks/fetchTaskAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchTaskApi(payload.query);
      return res.data.details[0] || {};
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to load Tasks",
      );
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const fetchTasksApiAction = createAsyncThunk(
  "tasks/fetchTasksApiAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchTasksApi(payload.query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to load Tasks",
      );
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

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
          "Failed to load Events & Tasks",
      );
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);
export const fetchQaEventsAndTasksAction = createAsyncThunk(
  "tasks/fetchQaEventsAndTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetchQaEventsAndTasksApi(payload);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to load Events & Tasks for Qa",
      );
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const declineTasksAction = createAsyncThunk(
  "tasks/declineTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await declineTasksApi(payload);
      toast.success("Task declined successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to decline task",
      );
      toast.error(err?.response?.data?.message || "Failed to decline task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const acceptTasksAction = createAsyncThunk(
  "tasks/acceptTasksAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await acceptTasksApi(payload);
      toast.success("Task accepted successfully");
      return res.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to accept task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const createTaskAction = createAsyncThunk(
  "tasks/createTaskAction",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await createTasksApi(payload.reqPayload);
      dispatch(clearTaskInputs());
      toast.success("Task created successfully");
      window.history.back();
      return res.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to create Task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const editTaskAction = createAsyncThunk(
  "tasks/editTaskAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await editTasksApi(payload.reqPayload);
      toast.success("Task edited successfully");
      window.history.back();
      return res.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to edit Task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const updateTaskStatusAction = createAsyncThunk(
  "tasks/updateTaskStatusAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await editTasksApi(payload.reqPayload);
      toast.success("Task Status updated successfully");
      if (payload.callback) {
        payload.callback(res.data);
      }
      // return res.data;
      return payload.reqPayload;
    } catch (err) {
      debugger;
      toast.error(
        err?.response?.data?.message || "Failed to update Task Status",
      );
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);

export const deleteTaskAction = createAsyncThunk(
  "tasks/deleteTaskAction",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await deleteTasksApi(payload.reqPayload);
      if (payload.callBack) {
        payload.callBack();
      }
      toast.success("Task deleted successfully");
      return res.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to delete Task");
      return rejectWithValue(err?.response?.data || "Error");
    }
  },
);
