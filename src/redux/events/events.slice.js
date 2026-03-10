import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./events.actions";

const initialState = {
  events: [],
  eventsLoading: false, // idle | loading | authenticated | unauthenticated
  eventsError: null,

  createEventLoading: false,
  createEventError: null,

  deleteEventLoading: false,
  deleteEventError: null,
  currentEvent: {},
  assignEventLoading: false,
  assignEventError: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updateTenantId(state, action) {
      state.tenantId = action.payload;
    },
    setCurrentEvent(state, action) {
      state.currentEvent = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get All Events.
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

    // Create Events.
    builder
      .addCase(actions.createEventsDispatch.pending, (state) => {
        state.createEventLoading = true;
      })
      .addCase(actions.createEventsDispatch.fulfilled, (state, action) => {
        const newEvent = action.payload.details;
        state.events = [newEvent, ...state.events];
        state.createEventLoading = false;
      })
      .addCase(actions.createEventsDispatch.rejected, (state) => {
        state.createEventLoading = false;
        state.createEventError =
          "Something went wrong while creating the Event.";
      });
    builder
      .addCase(actions.assignEventAction.pending, (state) => {
        state.assignEventLoading = true;
      })
      .addCase(actions.assignEventAction.fulfilled, (state, action) => {
        const payload = action.payload.reqPayload;

        const event = state.events.find(
          (currentEvent) => currentEvent.uid === payload.eventUid,
        );

        if (event) {
          event.assignedToUid = payload.assignedToUid;
          event.userName = payload.userName;
        }
        state.assignEventLoading = false;
      })
      .addCase(actions.assignEventAction.rejected, (state) => {
        state.assignEventLoading = false;
        state.assignEventError =
          "Something went wrong while assigning the Event.";
      });

    builder
      .addCase(actions.deleteEventDispatch.pending, (state) => {
        state.deleteEventLoading = true;
      })
      .addCase(actions.deleteEventDispatch.fulfilled, (state, action) => {
        const { eventUid } = action.payload;
        state.events = state.events.filter((event) => event.uid !== eventUid);
        state.deleteEventLoading = false;
      })
      .addCase(actions.deleteEventDispatch.rejected, (state) => {
        state.deleteEventLoading = false;
        state.deleteEventError = "Something went wrong while deleting Event.";
      });
  },
});

export const eventsSelector = (st) => st.events;
export const { clearAuthError, updateTenantId, setCurrentEvent } =
  eventsSlice.actions;
export default eventsSlice.reducer;
