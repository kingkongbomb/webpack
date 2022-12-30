import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import todos from "./redux/todos";
import Router from "./router";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    todo: todos,
  },
});

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
