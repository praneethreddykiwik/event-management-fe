import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserApi,
  getEventManagersApi,
  getUsersApi,
  updateUserApi,
  userDeleteApi,
} from "../../api/users.api";
import { ROLES } from "../../constants/roles";
import { toast } from "react-toastify";
import { updateAllRegInputs } from "../farms/farms.slice";
import { generateRegInputsAccordingToRole } from "../farms/metadata/reg.metadata";

export const fetchManagersAction = createAsyncThunk(
  "users/fetchManagersAction",
  async (payload, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${ROLES.eventManager}`;
      const res = await getEventManagersApi(query);
      if (payload?.callback) {
        payload.callback(res.data.details);
      }
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch managers",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const fetchAllUsersAction = createAsyncThunk(
  "users/fetchAllUsersAction",
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to fetch Users",
      );
      return rejectWithValue(err?.response?.data || "Fetch users failed");
    }
  },
);

export const fetchVendorsAction = createAsyncThunk(
  "users/fetchVendorsAction",
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${ROLES.vendor}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch Vendors",
      );
      return rejectWithValue(err?.response?.data || "Failed to fetch Vendors");
    }
  },
);

export const fetchSupervisorsAction = createAsyncThunk(
  "users/fetchSupervisorsAction",
  async (_, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const query = `?tenantId=${tenantId}&role=${ROLES.supervisor}`;
      const res = await getUsersApi(query);
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch Supervisors",
      );
      return rejectWithValue(
        err?.response?.data || "Failed to fetch Supervisors",
      );
    }
  },
);

export const fetchVendorsSupsQA = createAsyncThunk(
  "users/fetchVendorsSupsQA",
  async (payload, { rejectWithValue, getState }) => {
    const store = getState();
    const { tenantId } = store.auth;
    try {
      const supervisorQuery = `?tenantId=${tenantId}&role=${ROLES.supervisor},${ROLES.vendor},${ROLES.qa}`;
      const response = await getUsersApi(supervisorQuery);
      // const vendorQuery = `?tenantId=${tenantId}&role=${ROLES.vendor}`;
      // const vendorPromise = getUsersApi(vendorQuery);

      const users = response.data?.details.reduce(
        (acu, cur) => {
          acu[cur.role].push(cur);
          return acu;
        },
        { supervisor: [], vendor: [], qa: [] },
      );

      const res = {
        supervisors: users.supervisor,
        vendors: users.vendor,
        qa: users.qa,
      };

      if (payload?.callback) {
        payload.callback(res);
      }
      return res;
    } catch (err) {
      console.log(err);

      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch Supervisors and Vendors",
      );
      return rejectWithValue(
        err?.response?.data || "Failed to fetch Supervisors and Vendors",
      );
    }
  },
);

export const registrationAction = createAsyncThunk(
  "auth/registrationAction",
  async (payload, { rejectWithValue, dispatch, getState }) => {
    const navigate = payload.navigate;
    try {
      const res = await createUserApi(payload.reqPayload);

      // clear Inputs
      const store = getState();
      const { role } = store.auth;
      dispatch(updateAllRegInputs(generateRegInputsAccordingToRole(role)));

      toast.success("registration successful");
      if (payload.navPath) {
        navigate(payload.navPath);
      }
      return res.data; // user object (or any success response)
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Registration failed",
      );
      return rejectWithValue(err?.response?.data || "Registration failed");
    }
  },
);

// shahid
export const deleteUserAction = createAsyncThunk(
  "auth/deleteUserAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await userDeleteApi(payload);
      toast.success("user deleted successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to delete user",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);

export const updateUserAction = createAsyncThunk(
  "auth/updateUserAction",
  async (payload, { rejectWithValue }) => {
    // const navigate = payload.navigate;
    try {
      const res = await updateUserApi(payload);
      toast.success("Users updated successfully");
      return res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Failed to update user",
      );
      return rejectWithValue(err?.response?.data || "Login failed");
    }
  },
);
