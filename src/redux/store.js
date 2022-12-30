import { configureStore } from "@reduxjs/toolkit";
import todos from "./slices/todos";

const store = configureStore({
  reducer: {
    todo: todos,
  },
});

export { store };
