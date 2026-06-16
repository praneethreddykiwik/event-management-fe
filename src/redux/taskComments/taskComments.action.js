import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createTasksCommentsApi,
  deleteTaskCommentsApi,
  editTasksCommentsApi,
  fetchTasksCommentsApi,
} from "../../api/taskComments.api";

export const fetchTaskComments = createAsyncThunk(
  "taskComments/fetchTaskComments",
  async ({ taskUid }, { rejectWithValue }) => {
    try {
      const response = await fetchTasksCommentsApi(taskUid);
      debugger;
      return response.data.details;
    } catch (error) {
      debugger;
      debugger;
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch comments",
      );
    }
  },
);

export const createTaskComment = createAsyncThunk(
  "taskComments/createTaskComment",
  async ({ taskUid, commentText }, { rejectWithValue }) => {
    try {
      const response = await createTasksCommentsApi({
        taskUid,
        commentText,
      });

      debugger;
      return response.data.details;
    } catch (error) {
      debugger;
      return rejectWithValue(
        error.response?.data?.message || "Failed to create comment",
      );
    }
  },
);

export const updateTaskComment = createAsyncThunk(
  "taskComments/updateTaskComment",
  async ({ taskUid, commentUid, commentText }, { rejectWithValue }) => {
    try {
      const response = await editTasksCommentsApi({
        taskUid,
        commentUid,
        commentText,
      });

      debugger;
      return response.data.details;
    } catch (error) {
      debugger;
      return rejectWithValue(
        error.response?.data?.message || "Failed to update comment",
      );
    }
  },
);

export const deleteTaskComment = createAsyncThunk(
  "taskComments/deleteTaskComment",
  async ({ taskUid, commentUid }, { rejectWithValue }) => {
    try {
      const response = await deleteTaskCommentsApi({
        data: {
          taskUid,
          commentUid,
        },
      });

      debugger;
      return response.data.details;
    } catch (error) {
      debugger;
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete comment",
      );
    }
  },
);
