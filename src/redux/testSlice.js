import { createSlice } from "@reduxjs/toolkit";

export const inputData = createSlice({
  name: "myData",
  initialState: "",
  reducers: {
    updateField: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateField } = inputData.actions;
