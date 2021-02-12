import { createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 88,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
export const { increment, decrement } = counterSlice.actions;

export const appleSlice = createSlice({
  name: "apple",
  initialState: "APPPPLE",
  reducers: { change: state => "PEAR!" },
});
export const { change } = appleSlice.actions;

