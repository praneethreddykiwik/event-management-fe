import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUserInputs: [],
  createEventInputs: [],
  createTaskInputs: [],
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    // Registration Task
    updateRegInputs(state, action) {
      const { value, name } = action.payload;
      const i = state.createUserInputs.findIndex((fi) => fi.name === name);
      state.createUserInputs[i].value = value;
      state.createUserInputs[i].error = null;
    },
    updateAllRegInputs(state, action) {
      state.createUserInputs = action.payload;
    },

    // Events Inputs
    updateEventInputs(state, action) {
      const { value, name } = action.payload;
      const i = state.createEventInputs.findIndex((fi) => fi.name === name);
      state.createEventInputs[i].value = value;
      state.createEventInputs[i].error = null;
    },
    updateAllEventInputs(state, action) {
      state.createEventInputs = action.payload;
    },

    // Task Inputs
    updateTaskInputs(state, action) {
      const { value, name } = action.payload;
      const i = state.createTaskInputs.findIndex((fi) => fi.name === name);
      state.createTaskInputs[i].value = value;
      state.createTaskInputs[i].error = null;
    },
    updateAllTaskInputs(state, action) {
      state.createTaskInputs = action.payload;
    },
  },
});

export const formsSelector = (st) => st.forms;
export const {
  updateRegInputs,
  updateAllRegInputs,
  updateEventInputs,
  updateAllEventInputs,
  updateTaskInputs,
  updateAllTaskInputs,
} = formsSlice.actions;
export default formsSlice.reducer;
