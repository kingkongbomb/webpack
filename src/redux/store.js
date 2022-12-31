import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localstorage";
import todos from "./slices/todos";

const store = configureStore({
  reducer: {
    todo: todos,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export { store };
