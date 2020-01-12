import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { h, makeComponent } from "@cycle/react";

const main = function(sources) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events("press");

  const count$ = inc$.fold(count => count + 1, 0);

  const elem$ = count$.map(i =>
    h(TouchableOpacity, { sel: inc, style: styles.container }, [
      h(View, { style: styles.container }, [
        h(Text, { style: styles.text }, `Counter: ${i}`)
      ])
    ])
  );

  return {
    react: elem$
  };
};

const App = makeComponent(main);

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

export default App;
