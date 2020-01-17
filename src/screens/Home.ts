import xs, { Stream } from "xstream";
import { ReactElement } from "react";
import { h, ReactSource } from "@cycle/react";
import isolate from "@cycle/isolate";
import Counter from "../components/Counter";

import { Link } from "../routing";

import { StyleSheet, View, Text } from "react-native";

export type Sources = {
  react: ReactSource;
};

export type Sinks = {
  react: Stream<ReactElement<any>>;
};

function Home(sources: Sources): Sinks {
  const location$ = sources.react._props$;

  const TopCounter = isolate(Counter) as typeof Counter;
  const BottomCounter = isolate(Counter) as typeof Counter;

  const topProps$ = xs
    .of({
      label: "Top"
    })
    .remember();

  const bottomProps$ = xs
    .of({
      label: "Bottom"
    })
    .remember();

  const topCounter = TopCounter({
    react: sources.react,
    props$: topProps$
  });
  const bottomCounter = BottomCounter({
    react: sources.react,
    props$: bottomProps$
  });

  const sum$ = xs
    .combine(topCounter.count$, bottomCounter.count$)
    .map(([top, bottom]) => {
      const sum = top + bottom;
      return sum;
    })
    .remember();

  // View combines component DOM.
  const screen$ = xs
    .combine(location$, sum$, topCounter.react, bottomCounter.react)
    .map(([{ location: { pathname } }, bmi, topVTree, bottomVTree]) =>
      h(View, { style: styles.container }, [
        topVTree,
        bottomVTree,
        h(Text, { style: styles.container }, "Sum is " + bmi),
        h(View, { style: styles.container }, [
          h(Text, {}, ["Current path: " + pathname]),
          h(Link, { to: "/" }, [
            h(Text, { style: { textDecorationLine: "underline" } }, "Welcome")
          ])
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

export default Home;
