import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./users.actions";

const initialState = {
  eventManagersLoading: false,
  eventManagers: [],
  eventManagersError: false,

  registrationError: null,
  registrationSuccess: false,
  registrationLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearRegistrationSuccessMsg(state) {
      state.registrationSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchManagersAction.pending, (state) => {
        state.eventManagersLoading = true;
      })
      .addCase(actions.fetchManagersAction.fulfilled, (state, action) => {
        state.eventManagers = action.payload?.details;
        debugger;
        state.eventManagersLoading = false;
      })
      .addCase(actions.fetchManagersAction.rejected, (state) => {
        state.eventManagersError = "Something went wrong";
        state.eventManagersLoading = false;
      });

    // registration
    builder
      .addCase(actions.registrationAction.pending, (state) => {
        state.registrationLoading = true;
      })
      .addCase(actions.registrationAction.fulfilled, (state) => {
        state.registrationSuccess = true;
        state.registrationLoading = false;
      })
      .addCase(actions.registrationAction.rejected, (state) => {
        state.registrationError = "Something went wrong";
        state.registrationLoading = false;
      });
  },
});

export const usersSelector = (st) => st.users;
export const {
  clearRegistrationSuccessMsg,
  updateRegInputs,
  updateAllRegInputs,
} = usersSlice.actions;
export default usersSlice.reducer;
