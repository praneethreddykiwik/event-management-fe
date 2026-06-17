import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./taskComments.action";

const initialState = {
  comments: [],
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  error: null,
};

const taskCommentsSlice = createSlice({
  name: "taskComments",
  initialState,
  reducers: {
    clearTaskCommentsError: (state) => {
      state.error = null;
    },
    resetTaskComments: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(actions.fetchTaskComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actions.fetchTaskComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload || [];
      })
      .addCase(actions.fetchTaskComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(actions.createTaskComment.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(actions.createTaskComment.fulfilled, (state, action) => {
        state.creating = false;

        // Add new comment to top
        state.comments.unshift(action.payload);
      })
      .addCase(actions.createTaskComment.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload;
      })

      // Update
      .addCase(actions.updateTaskComment.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(actions.updateTaskComment.fulfilled, (state, action) => {
        state.updating = false;

        const updatedComment = action.payload;

        const index = state.comments.findIndex(
          (comment) => comment.commentUid === updatedComment.commentUid,
        );

        if (index !== -1) {
          state.comments[index] = updatedComment;
        }
      })
      .addCase(actions.updateTaskComment.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(actions.deleteTaskComment.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(actions.deleteTaskComment.fulfilled, (state, action) => {
        state.deleting = false;

        const deletedCommentUid = action.payload.commentUid;

        state.comments = state.comments.filter(
          (comment) => comment.commentUid !== deletedCommentUid,
        );
      })
      .addCase(actions.deleteTaskComment.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
  },
});

export const { clearTaskCommentsError, resetTaskComments } =
  taskCommentsSlice.actions;
export const taskCommentsSelector = (st) => st.taskComments;

export default taskCommentsSlice.reducer;
