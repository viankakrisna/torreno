import React from "react";
import ReactDOM from "react-dom";
import useWindowSize from "hooks/useWindowSize";
import View from "components/AnimatedView";
import FAB from "components/FAB";
import Tabs from 'components/Tabs';
import useTheme from "hooks/useTheme";
import { Text } from "react-native";
import ListItem from 'components/ListItem';

import "./styles.css";

const text = {
  appName: "Torreno"
};

function App() {
  const { width, height } = useWindowSize();
  const theme = useTheme();
  return (
    <View
      style={{
        width,
        height,
        margin: "auto",
        backgroundColor: "white",
        overflow: "hidden"
      }}
    >
      <View style={{ backgroundColor: theme.mainColor, height: 56 }}>
        <Text style={{ color: "white", padding: 16, fontSize: 16 }}>
          {text.appName}
        </Text>
      </View>
      <Tabs initialTab="all">
        {[
          {
            title: "All",
            id: "all",
            content: () => (
              <ListItem />
            )
          },
          {
            title: "queued",
            id: "queued",
            content: () => (
              <ListItem />
            )
          },
          {
            title: "finished",
            id: "finished",
            content: () => (
              <ListItem />
            )
          }
        ]}
      </Tabs>
      <FAB />
    </View >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
