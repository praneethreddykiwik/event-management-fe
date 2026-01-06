import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUserInputs: [],

  createEventInputs: [],
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    updateRegInputs(state, action) {
      const { value, name } = action.payload;
      const i = state.createUserInputs.findIndex((fi) => fi.name === name);
      state.createUserInputs[i].value = value;
      state.createUserInputs[i].error = null;
    },
    updateAllRegInputs(state, action) {
      state.createUserInputs = action.payload;
    },
    updateEventInputs(state, action) {
      const { value, name } = action.payload;
      const i = state.createEventInputs.findIndex((fi) => fi.name === name);
      state.createEventInputs[i].value = value;
      state.createEventInputs[i].error = null;
    },
    updateAllEventInputs(state, action) {
      state.createEventInputs = action.payload;
    },
  },
});

export const formsSelector = (st) => st.forms;
export const {
  updateRegInputs,
  updateAllRegInputs,
  updateEventInputs,
  updateAllEventInputs,
} = formsSlice.actions;
export default formsSlice.reducer;
