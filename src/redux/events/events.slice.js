import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./events.actions";
import { INITIAL_FILTERS } from "../../constants/events.constants";

const initialState = {
  events: [],
  eventsLoading: false,
  eventsError: null,

  eventsStatusCounts: {},
  selectedEventFilters: [...INITIAL_FILTERS],

  createEventLoading: false,
  createEventError: null,

  deleteEventLoading: false,
  deleteEventError: null,

  assignEventLoading: false,
  assignEventError: null,

  eventDetailsLoading: false,
  eventDetailsError: null,
  eventDetails: {}, // for event-details page
  eventGridView: false,

  // search field
  eventsSearchVal: "",
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updateTenantId(state, action) {
      state.tenantId = action.payload;
    },
    setEventDetails(state, action) {
      state.eventDetails = action.payload;
    },
    setSelectedEventFilters(state, action) {
      state.selectedEventFilters = action.payload;
    },
    setEventsGridView: (state, action) => {
      state.eventGridView = action.payload;
    },
    setEventsSearchVal: (state, action) => {
      state.eventsSearchVal = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get All Events.
    builder
      .addCase(actions.fetchEventsDispatch.pending, (state) => {
        state.eventsLoading = true;
      })
      .addCase(actions.fetchEventsDispatch.fulfilled, (state, action) => {
        state.events = action.payload?.details?.events;
        state.eventsStatusCounts = action.payload?.details?.statusCounts;
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
          (eventDetails) => eventDetails.uid === payload.eventUid,
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

    builder
      .addCase(actions.fetchEventDetailsAction.pending, (state) => {
        state.eventDetailsLoading = true;
      })
      .addCase(actions.fetchEventDetailsAction.fulfilled, (state, action) => {
        state.eventDetails = action.payload;
        state.eventDetailsLoading = false;
      })
      .addCase(actions.fetchEventDetailsAction.rejected, (state) => {
        state.eventDetailsLoading = false;
        state.eventDetailsError =
          "Something went wrong while fetching Event details.";
      });

    builder
      .addCase(actions.eventsFilterAction.pending, (state) => {
        state.eventsLoading = true;
      })
      .addCase(actions.eventsFilterAction.fulfilled, (state, action) => {
        state.events = action.payload?.events;
        // state.eventsStatusCounts = action.payload?.details?.statusCounts;
        state.eventsLoading = false;

        state.selectedEventFilters = action.payload.selectedEventFilters;
      })
      .addCase(actions.eventsFilterAction.rejected, (state) => {
        state.authUser = null;
        state.eventsLoading = false;
        state.eventsError = "Error";
      });
  },
});

export const eventsSelector = (st) => st.events;
export const {
  clearAuthError,
  updateTenantId,
  setEventDetails,
  setSelectedEventFilters,
  setEventsGridView,
  setEventsSearchVal,
} = eventsSlice.actions;
export default eventsSlice.reducer;
