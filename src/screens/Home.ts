import xs, { Stream } from "xstream";
import { ReactElement } from "react";
import { h, ReactSource } from "@cycle/react";
import isolate from "@cycle/isolate";
import Counter from "../components/Counter";

import { StyleSheet, View, Text } from "react-native";

export type Sources = {
  interface: ReactSource;
};
export type Sinks = {
  interface: Stream<ReactElement<any>>;
};

function Home(sources: Sources): Sinks {
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
    interface: sources.interface,
    props$: topProps$
  });
  const bottomCounter = BottomCounter({
    interface: sources.interface,
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
    .combine(sum$, topCounter.interface, bottomCounter.interface)
    .map(([bmi, topVTree, bottomVTree]) =>
      h(View, { style: styles.container }, [
        topVTree,
        bottomVTree,
        h(Text, { style: styles.container }, "Sum is " + bmi)
      ])
    );

  return {
    interface: screen$
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
