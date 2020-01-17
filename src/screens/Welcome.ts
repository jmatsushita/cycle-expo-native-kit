import xs, { Stream } from "xstream";
import { ReactElement } from "react";
import { h, ReactSource } from "@cycle/react";

import { StyleSheet, View, Text } from "react-native";
import { Link } from "../routing";

export type Sources = {
  react: ReactSource;
};

export type Sinks = {
  react: Stream<ReactElement<any>>;
};

function Welcome(sources: Sources): Sinks {
  const location$ = sources.react._props$;

  const screen$ = xs.combine(location$).map(([{ location: { pathname } }]) =>
    h(View, { style: styles.container }, [
      h(Text, {}, "Current path: " + pathname),
      h(Link, { to: "/home" }, [
        h(Text, { style: { textDecorationLine: "underline" } }, "Home")
      ])
    ])
  );

  return {
    react: screen$
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Welcome;
