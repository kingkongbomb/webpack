import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./navbar";
import LoadScreen from "./components/loadScreen";

const Test  = React.lazy(() => import("./components/test"));

const Home = React.lazy(() => import("./components/home"));
const ColorApp = React.lazy(() => import("./components/colorPicker"));
const TodoApp = React.lazy(() => import("./components/todo"));
const Covid = React.lazy(() => import("./components/covid"));
const Weather  = React.lazy(() => import("./components/weather"));
const Postman  = React.lazy(() => import("./components/postman"));

export default function Router() {
  const [fixed, setFixed] = useState("");
  const [trans, setTrans] = useState("dark");

  return (
    <React.Suspense fallback={<LoadScreen />}>
      <HashRouter>
        <Nav fixed={fixed} trans={trans}/>
        <Switch>
          <Route path="/" exact
            render={() => <Home setNav={(val) => setFixed(val)} setTrans={val=>setTrans(val)}/>}
          />
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/ColorApp" component={ColorApp} />
          <Route path="/Covid" component={Covid} />
          <Route path="/Weather" component={Weather} />
          <Route path="/Postman" component={Postman} />
          <Route path="/Test" component={Test} />
        </Switch>
      </HashRouter>
    </React.Suspense>
  );
}
