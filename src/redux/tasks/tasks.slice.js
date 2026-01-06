import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./tasks.actions";

const initialState = {
  tasks: [],
  tasksLoading: false, // idle | loading | authenticated | unauthenticated
  tasksError: null,

  declineTaskLoading: false,
  declineTask: false,
  declineTaskError: false,
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
      .addCase(actions.fetchEventsAndTasksAction.pending, (state) => {
        state.tasksLoading = true;
      })
      .addCase(actions.fetchEventsAndTasksAction.fulfilled, (state, action) => {
        const dat = action.payload?.details;
        const manipulateData = [];
        dat.forEach((el) => {
          const eventUid = el.eventUid;
          const exists = manipulateData.find((fl) => fl.eventUid === eventUid);
          if (exists) {
            const i = manipulateData.findIndex(
              (fl) => fl.eventUid === eventUid
            );
            manipulateData[i].tasks.push(el);
          } else {
            manipulateData.push({ ...el, tasks: [el] });
          }
        });
        state.tasks = manipulateData;
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
      .addCase(actions.declineTasksAction.rejected, (state) => {
        state.authUser = null;
        state.declineTaskLoading = false;
        state.declineTaskError = actions.payload || "Failed to decline task";
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
