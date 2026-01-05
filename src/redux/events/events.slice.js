import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./events.actions";

const initialState = {
  events: [],
  eventsLoading: false, // idle | loading | authenticated | unauthenticated
  eventsError: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updateTenantId(state, action) {
      state.tenantId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchEventsDispatch.pending, (state) => {
        state.eventsLoading = true;
      })
      .addCase(actions.fetchEventsDispatch.fulfilled, (state, action) => {
        state.events = action.payload?.details;
        state.eventsLoading = false;
      })
      .addCase(actions.fetchEventsDispatch.rejected, (state) => {
        state.authUser = null;
        state.eventsLoading = false;
        state.eventsError = "Error";
      });
  },
});

export const eventsSelector = (st) => st.events;
export const { clearAuthError, updateTenantId } = eventsSlice.actions;
export default eventsSlice.reducer;
