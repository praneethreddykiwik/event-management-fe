import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./users.actions";
import { USER_ROLE_FILTERS } from "../../constants/user.constants";

const initialState = {
  eventManagersLoading: false,
  eventManagers: [],
  eventManagersError: false,

  vendorsLoading: false,
  vendors: [],
  vendorsError: false,

  supervisorsLoading: false,
  supervisors: [],
  supervisorsError: false,

  qaLoading: false,
  qa: [],
  qaError: false,

  registrationError: null,
  registrationSuccess: false,
  registrationLoading: false,

  updateUserError: null,
  updateUserSuccess: false,
  updateUserLoading: false,

  allUsersLoading: false,
  allUsers: [],
  allUsersError: null,

  roleCounts: {},
  selectedRoleFilters: [...USER_ROLE_FILTERS],

  userMgtGridView: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearRegistrationSuccessMsg(state) {
      state.registrationSuccess = false;
    },
    usersFilterAction(state, action) {
      state.selectedRoleFilters = action.payload;
    },
    setUserMgtGridView(state, action) {
      state.userMgtGridView = action.payload;
    },
    setSelectedRoleFilters(state, action) {
      state.selectedRoleFilters = action.payload;
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
        state.allUsers = action.payload?.details?.users || [];
        state.allUsersLoading = false;
        state.allUsersError = null;
        state.roleCounts = action.payload?.details?.roleCounts || {};
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
        state.vendors = action.payload?.details?.users;
        state.vendorsLoading = false;
        state.vendorsError = null;
      })
      .addCase(actions.fetchVendorsAction.rejected, (state) => {
        state.vendorsError = "Something went wrong";
        state.vendorsLoading = false;
      });

    builder
      .addCase(actions.fetchSupervisorsAction.pending, (state) => {
        state.supervisorsLoading = true;
      })
      .addCase(actions.fetchSupervisorsAction.fulfilled, (state, action) => {
        state.supervisors = action.payload?.details?.users;
        state.supervisorsLoading = false;
        state.supervisorsError = null;
      })
      .addCase(actions.fetchSupervisorsAction.rejected, (state) => {
        state.supervisorsError = "Something went wrong";
        state.supervisorsLoading = false;
      });

    builder
      .addCase(actions.fetchVendorsSupsQA.pending, (state) => {
        state.supervisorsLoading = true;
        state.vendorsLoading = true;
        state.qaLoading = true;
      })
      .addCase(actions.fetchVendorsSupsQA.fulfilled, (state, action) => {
        state.supervisors = action.payload.supervisors;
        state.vendors = action.payload.vendors;
        state.qa = action.payload.qa;

        state.supervisorsLoading = false;
        state.vendorsLoading = false;
        state.qaLoading = false;

        state.supervisorsError = null;
        state.vendorsError = null;
        state.qaError = null;
      })
      .addCase(actions.fetchVendorsSupsQA.rejected, (state) => {
        state.supervisorsError = "Something went wrong";
        state.vendorsError = "Something went wrong";
        state.qaError = "Something went wrong";

        state.supervisorsLoading = false;
        state.vendorsLoading = false;
        state.qaLoading = false;
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
export const {
  clearRegistrationSuccessMsg,
  usersFilterAction,
  setUserMgtGridView,
  setSelectedRoleFilters,
} = usersSlice.actions;
export default usersSlice.reducer;
