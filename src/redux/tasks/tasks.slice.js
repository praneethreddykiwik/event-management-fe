import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./tasks.actions";

const initialState = {
  eventsAndTasks: [],
  taskCountObj: {},
  kpiCounts: {},
  priorityCounts: {},
  tasksLoading: false,
  tasksError: null,

  tasksByEvent: [], // what is this? // checkHere
  tasksByEventsLoading: false,
  tasksByEventsError: null,

  task: {},
  taskLoading: false,
  taskError: null,

  declineTaskLoading: false,
  declineTask: false,
  declineTaskError: false,

  editTaskLoading: false,
  editTask: false,
  editTaskError: "",

  acceptTaskLoading: false,
  acceptTask: null,
  acceptTaskError: "",

  createTaskALoading: false,
  createTask: null,
  createTaskError: null,

  updateTaskStatus: null,
  updateTaskStatusLoading: null,
  updateTaskStatusError: null,

  deleteTaskLoading: false,
  deleteTask: null,
  deleteTaskError: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
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
      .addCase(actions.fetchTaskAction.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(actions.fetchTaskAction.fulfilled, (state, action) => {
        state.task = action.payload || {};
        state.taskLoading = false;
        state.taskError = null;
      })
      .addCase(actions.fetchTaskAction.rejected, (state, action) => {
        state.task = {};
        state.taskLoading = false;
        state.taskError = action.payload || "Failed to fetch task details";
      });
    builder
      .addCase(actions.fetchEventsAndTasksAction.pending, (state) => {
        state.tasksLoading = true;
      })
      .addCase(actions.fetchEventsAndTasksAction.fulfilled, (state, action) => {
        const res = action.payload?.details || {};
        state.eventsAndTasks = res.data;
        state.taskCountObj = res.countObj;
        state.tasksLoading = false;
        state.tasksError = null;
      })
      .addCase(actions.fetchEventsAndTasksAction.rejected, (state) => {
        state.authUser = null;
        state.tasksLoading = false;
        state.tasksError = "Error";
      });
    builder
      .addCase(actions.fetchQaEventsAndTasksAction.pending, (state) => {
        state.tasksLoading = true;
      })
      .addCase(
        actions.fetchQaEventsAndTasksAction.fulfilled,
        (state, action) => {
          const res = action.payload?.details || {};
          state.eventsAndTasks = res.data;
          state.taskCountObj = res.countObj;
          state.kpiCounts = res.kpiCounts;
          state.priorityCounts = res.priorityCounts;
          state.tasksLoading = false;
          state.tasksError = null;
        },
      )
      .addCase(actions.fetchQaEventsAndTasksAction.rejected, (state) => {
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

    builder
      .addCase(actions.createTaskAction.pending, (state) => {
        state.createTaskALoading = true;
        state.createTaskError = null;
      })
      .addCase(actions.createTaskAction.fulfilled, (state, action) => {
        state.createTask = action.payload;
        state.createTaskALoading = false;
        state.createTaskError = null;
      })
      .addCase(actions.createTaskAction.rejected, (state, action) => {
        state.createTaskALoading = false;
        state.createTaskError = action.payload || "Failed to create Task";
      });

    builder
      .addCase(actions.editTaskAction.pending, (state) => {
        state.editTaskLoading = true;
        state.editTaskError = null;
      })
      .addCase(actions.editTaskAction.fulfilled, (state, action) => {
        state.editTask = action.payload;
        state.editTaskLoading = false;
        state.editTaskError = null;
      })
      .addCase(actions.editTaskAction.rejected, (state, action) => {
        state.editTaskLoading = false;
        state.editTaskError = action.payload || "Failed to create Task";
      });

    builder
      .addCase(actions.updateTaskStatusAction.pending, (state) => {
        state.updateTaskStatusLoading = true;
        state.updateTaskStatusError = null;
      })
      .addCase(actions.updateTaskStatusAction.fulfilled, (state, action) => {
        state.updateTaskStatus = action.payload;
        state.updateTaskStatusLoading = false;
        state.updateTaskStatusError = null;

        const updatedTaskUid = action.payload.taskUid;
        const newStatus = action.payload.status;

        // update the status in Fe only instead of a new api call
        for (const event of state.eventsAndTasks) {
          const task = event.tasks?.find(
            (task) => task.taskUid === updatedTaskUid,
          );

          if (task) {
            task.taskStatus = newStatus;
            break;
          }
        }

        const taskByEvent = state.tasksByEvent?.find(
          (task) => task.taskUid === updatedTaskUid,
        );

        if (taskByEvent) {
          taskByEvent.taskStatus = newStatus;
        }
      })
      .addCase(actions.updateTaskStatusAction.rejected, (state, action) => {
        state.updateTaskStatusLoading = false;
        state.updateTaskStatusError = action.payload || "Failed to create Task";
      });

    builder
      .addCase(actions.deleteTaskAction.pending, (state) => {
        state.deleteTaskLoading = true;
        state.deleteTaskError = null;
      })
      .addCase(actions.deleteTaskAction.fulfilled, (state, action) => {
        state.deleteTaskLoading = false;
        state.deleteTask = action.payload;
      })
      .addCase(actions.deleteTaskAction.rejected, (state, action) => {
        state.acceptTaskLoading = false;
        state.deleteTaskError = action.payload || "Failed to accept task";
      });
  },
});

export const tasksSelector = (st) => st.tasks;
export const { clearAuthError } = tasksSlice.actions;
export default tasksSlice.reducer;
