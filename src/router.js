import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navbar";
import LoadScreen from "./components/loadScreen";

const Test = React.lazy(() => import("./components/test"));
const Loader = React.lazy(() => import("./components/loadScreen"));

const Home = React.lazy(() => import("./components/home"));
const ColorApp = React.lazy(() => import("./components/colorPicker"));
const TodoApp = React.lazy(() => import("./components/todo"));
const Covid = React.lazy(() => import("./components/covid"));
const Weather = React.lazy(() => import("./components/weather"));
const Postman = React.lazy(() => import("./components/postman"));

export default function Routes() {
  const [fixed, setFixed] = useState("");
  const [trans, setTrans] = useState("dark");

  return (
    <Router>
      <Nav fixed={fixed} trans={trans} />
      <React.Suspense fallback={<LoadScreen />}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => ( <Home setNav={(val) => setFixed(val)} setTrans={(val) => setTrans(val)} /> )}
          />
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/ColorApp" component={ColorApp} />
          <Route path="/Covid" component={Covid} />
          <Route path="/Weather" component={Weather} />
          <Route path="/Postman" component={Postman} />
          <Route path="/Test" component={Test} />
          <Route path="/Loader" component={Loader} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
