import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import Router from "./router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading local storage...</div>}
      persistor={persistor}
    >
      <Router />
    </PersistGate>
  </Provider>
);
