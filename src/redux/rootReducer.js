import { combineReducers } from "@reduxjs/toolkit";
import todos from "./slices/todos";

export const rootReducer = combineReducers({
  todo: todos,
});
