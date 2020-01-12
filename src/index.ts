// This is where routing will happen

import Home from "./screens/Home";
import { makeComponent } from "@cycle/react";
import { ReactElement } from "react";
import { ReactSource } from "@cycle/react";
import { Stream } from "xstream";

// Pass through to output react stream.

export type Sources = {
  react: ReactSource;
};
export type Sinks = {
  react: Stream<ReactElement<any>>;
};

function React(sources: Sources): Sinks {
  const home = Home({
    interface: sources.react
  });

  return {
    react: home.interface
  };
}

const App = makeComponent(React);

export default App;
