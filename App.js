import { TouchableOpacity, View, Text } from "react-native";
import { h, makeComponent } from "@cycle/react";

const main = function(sources) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events("press");

  const count$ = inc$.fold(count => count + 1, 0);

  const elem$ = count$.map(i =>
    h(TouchableOpacity, { sel: inc }, [
      h(View, [h(Text, {}, `\n\n\n\nCounter: ${i}`)])
    ])
  );

  return {
    react: elem$
  };
};

const App = makeComponent(main);

export default App;
