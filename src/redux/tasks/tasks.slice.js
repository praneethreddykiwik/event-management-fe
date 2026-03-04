import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./tasks.actions";

const initialState = {
  tasks: [],
  tasksLoading: false, // idle | loading | authenticated | unauthenticated
  tasksError: null,

  tasksByEvent: [],
  tasksByEventsLoading: false, // idle | loading | authenticated | unauthenticated
  tasksByEventsError: null,

  declineTaskLoading: false,
  declineTask: false,
  declineTaskError: false,

  editTaskLoading: false,
  editTask: false,
  editTaskError: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTenantId(state, action) {
      state.tenantId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchTasksApiAction.pending, (state) => {
        state.tasksByEventsLoading = true;
      })
      .addCase(actions.fetchTasksApiAction.fulfilled, (state, action) => {
        state.tasksByEvent = action.payload?.details;
        state.tasksByEventsLoading = false;
        state.tasksByEventsError = null;
      })
      .addCase(actions.fetchTasksApiAction.rejected, (state) => {
        state.authUser = null;
        state.tasksByEventsLoading = false;
        state.tasksByEventsError = "Error";
      });
    builder
      .addCase(actions.fetchEventsAndTasksAction.pending, (state) => {
        state.tasksLoading = true;
      })
      .addCase(actions.fetchEventsAndTasksAction.fulfilled, (state, action) => {
        state.tasks = action.payload?.details;
        state.tasksLoading = false;
        state.tasksError = null;
      })
      .addCase(actions.fetchEventsAndTasksAction.rejected, (state) => {
        state.authUser = null;
        state.tasksLoading = false;
        state.tasksError = "Error";
      });
    builder
      .addCase(actions.declineTasksAction.pending, (state) => {
        state.declineTaskLoading = true;
        state.declineTaskError = null;
      })
      .addCase(actions.declineTasksAction.fulfilled, (state, action) => {
        state.declineTask = action.payload;
        state.declineTaskLoading = false;
        state.declineTaskError = null;
      })
      .addCase(actions.declineTasksAction.rejected, (state, action) => {
        state.authUser = null;
        state.declineTaskLoading = false;
        state.declineTaskError = action.payload || "Failed to decline task";
      });

    builder
      .addCase(actions.acceptTasksAction.pending, (state) => {
        state.acceptTaskLoading = true;
        state.acceptTaskError = null;
      })
      .addCase(actions.acceptTasksAction.fulfilled, (state, action) => {
        state.acceptTask = action.payload;
        state.acceptTaskLoading = false;
        state.acceptTaskError = null;
      })
      .addCase(actions.acceptTasksAction.rejected, (state, action) => {
        state.acceptTaskLoading = false;
        state.acceptTaskError = action.payload || "Failed to accept task";
      });
  },
});

export const tasksSelector = (st) => st.tasks;
export const { clearAuthError, updateTenantId } = tasksSlice.actions;
export default tasksSlice.reducer;
