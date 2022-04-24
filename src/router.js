import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navbar";
import LinearProgress from '@mui/material/LinearProgress';

const Home = React.lazy(() => import("./pages/home"));
const ColorApp = React.lazy(() => import("./pages/colorPicker"));
const TodoApp = React.lazy(() => import("./pages/todo"));
const Covid = React.lazy(() => import("./pages/covid"));

export default function Routes() {
  const [fixed, setFixed] = useState("");
  const [trans, setTrans] = useState("dark");

  return (
    <Router>
      <Nav fixed={fixed} trans={trans} />
      <React.Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                setNav={(val) => setFixed(val)}
                setTrans={(val) => setTrans(val)}
              />
            )}
          />
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/ColorApp" component={ColorApp} />
          <Route path="/Covid" component={Covid} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
