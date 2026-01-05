import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUserInputs: [],
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
  },
});

export const formsSelector = (st) => st.forms;
export const { updateRegInputs, updateAllRegInputs } = formsSlice.actions;
export default formsSlice.reducer;
