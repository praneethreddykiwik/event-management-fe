import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./tasks.actions";

const initialState = {
  tasks: [],
  tasksLoading: false, // idle | loading | authenticated | unauthenticated
  tasksError: null,
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
      .addCase(actions.fetchTasksDispatch.pending, (state) => {
        state.tasksLoading = true;
      })
      .addCase(actions.fetchTasksDispatch.fulfilled, (state, action) => {
        state.tasks = action.payload?.details;
        state.tasksLoading = false;
      })
      .addCase(actions.fetchTasksDispatch.rejected, (state) => {
        state.authUser = null;
        state.tasksLoading = false;
        state.tasksError = "Error";
      });
  },
});

export const tasksSelector = (st) => st.tasks;
export const { clearAuthError, updateTenantId } = tasksSlice.actions;
export default tasksSlice.reducer;
