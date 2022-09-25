import { useState, lazy, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navbar";
import LinearProgress from "@mui/material/LinearProgress";
import WordHack from "./pages/wordHack";

const Home = lazy(() => import("./pages/home"));
const ColorApp = lazy(() => import("./pages/colorPicker"));
const TodoApp = lazy(() => import("./pages/todo"));
const Covid = lazy(() => import("./pages/covid"));
const Curl = lazy(() => import("./pages/curl"));

export default function Routes() {
  const [homePg, setHomePg] = useState(false);

  return (
    <Router>
      <Nav homePg={homePg} setHomePg={setHomePg} />
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/" exact>
            <Home setHomePg={setHomePg} />
          </Route>
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/ColorApp" component={ColorApp} />
          <Route path="/Covid" component={Covid} />
          <Route path="/Curl" component={Curl} />
          <Route path="/WordHack" component={WordHack} />
        </Switch>
      </Suspense>
    </Router>
  );
}
