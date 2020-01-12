import { Stream, MemoryStream } from "xstream";
import { ReactElement } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { h, ReactSource } from "@cycle/react";

export type CounterProps = {
  label: string;
};

export type Sources = {
  interface: ReactSource;
  props$: Stream<CounterProps>;
};
export type Sinks = {
  interface: Stream<ReactElement<any>>;
  count$: MemoryStream<number>;
};

function Counter(sources: Sources): Sinks {
  const inc = Symbol();
  const inc$ = sources.interface.select(inc).events("press");

  const count$ = inc$.fold(count => count + 1, 0);

  const elem$ = count$.map(i =>
    h(TouchableOpacity, { sel: inc, style: styles.container }, [
      h(Text, { style: styles.text }, `Counter: ${i}`)
    ])
  );

  return {
    interface: elem$,
    count$
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold"
  }
});

export default Counter;
