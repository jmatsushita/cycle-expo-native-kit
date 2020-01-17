import React, { ReactElement } from "react";
import { ReactSource, makeComponent } from "@cycle/react";
import { Stream } from "xstream";

import { Router, Route, withRouter } from "./routing";

import Home from "./screens/Home";
import Welcome from "./screens/Welcome";

export type Sources = {
  react: ReactSource;
};
export type Sinks = {
  react: Stream<ReactElement<any>>;
};

// This should mean I can pass different drivers to these top level components.
const WelcomeComponent = withRouter(makeComponent(Welcome));
const HomeComponent = withRouter(makeComponent(Home));

const App = () => (
  <Router>
    <Route exact path="/" component={WelcomeComponent} />
    <Route path="/home" component={HomeComponent} />
  </Router>
);

export default App;
