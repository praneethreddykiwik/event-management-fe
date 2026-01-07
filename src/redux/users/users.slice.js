import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./users.actions";

const initialState = {
  eventManagersLoading: false,
  eventManagers: [],
  eventManagersError: false,

  vendorsLoading: false,
  vendors: [],
  vendorsError: false,

  registrationError: null,
  registrationSuccess: false,
  registrationLoading: false,

  updateUserError: null,
  updateUserSuccess: false,
  updateUserLoading: false,
  
  allUsersLoading:false,
  allUsers:[],
  allUsersError:null,
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
        state.eventManagersLoading = false;
        state.eventManagersError = null;
      })
      .addCase(actions.fetchManagersAction.rejected, (state) => {
        state.eventManagersError = "Something went wrong";
        state.eventManagersLoading = false;
      });

    builder
      .addCase(actions.fetchAllUsersAction.pending, (state) => {
        state.allUsersLoading = true;
      })
      .addCase(actions.fetchAllUsersAction.fulfilled, (state, action) => {
        state.allUsers = action.payload?.details;
        state.allUsersLoading = false;
        state.allUsersError = null;
      })
      .addCase(actions.fetchAllUsersAction.rejected, (state) => {
        state.allUsersError = "Something went wrong";
        state.allUsersLoading = false;
      });

    builder
      .addCase(actions.fetchVendorsAction.pending, (state) => {
        state.vendorsLoading = true;
      })
      .addCase(actions.fetchVendorsAction.fulfilled, (state, action) => {
        state.vendors = action.payload?.details;
        state.vendorsLoading = false;
        state.vendorsError = null;
      })
      .addCase(actions.fetchVendorsAction.rejected, (state) => {
        state.vendorsError = "Something went wrong";
        state.vendorsLoading = false;
      });

    // registration
    builder
      .addCase(actions.registrationAction.pending, (state) => {
        state.registrationLoading = true;
      })
      .addCase(actions.registrationAction.fulfilled, (state) => {
        state.registrationSuccess = true;
        state.registrationLoading = false;
        state.registrationError = null;
      })
      .addCase(actions.registrationAction.rejected, (state) => {
        state.registrationError = "Something went wrong";
        state.registrationLoading = false;
      });

    // Update User
    builder
      .addCase(actions.updateUserAction.pending, (state) => {
        state.updateUserLoading = true;
      })
      .addCase(actions.updateUserAction.fulfilled, (state) => {
        state.updateUserSuccess = true;
        state.updateUserLoading = false;
        state.updateUserError = null;
      })
      .addCase(actions.updateUserAction.rejected, (state) => {
        state.updateUserError = "Something went wrong";
        state.updateUserLoading = false;
      });
  },
});

export const usersSelector = (st) => st.users;
export const { clearRegistrationSuccessMsg } = usersSlice.actions;
export default usersSlice.reducer;
