import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../reducers/reducers";
import { counterSlice, appleSlice } from "../slice";
import {inputData} from "../testSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    apple: appleSlice.reducer,
    dataReducer: inputData.reducer,
  },
});
