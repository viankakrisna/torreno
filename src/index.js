import React, { useState } from "react";
import ReactDOM from "react-dom";
import colors from "material-colors";
import useWindowSize from "hooks/useWindowSize";
import View from "components/AnimatedView";
import { Text, TouchableOpacity } from "react-native";

import "./styles.css";

const text = {
  appName: "Torreno"
};

const theme = {
  mainColor: colors.green[400]
};

function App() {
  const { width, height } = useWindowSize();
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    {
      title: "All",
      id: "all",
      content: () => (
        <View style={{ alignItems: "center" }}>
          <Text>Tab 1</Text>
        </View>
      )
    },
    {
      title: "queued",
      id: "queued",
      content: () => (
        <View style={{ alignItems: "center" }}>
          <Text>Tab 2</Text>
        </View>
      )
    },
    {
      title: "finished",
      id: "finished",
      content: () => (
        <View style={{ alignItems: "center" }}>
          <Text>Tab 3</Text>
        </View>
      )
    }
  ];
  const activeTabIndex = tabs.findIndex(({ id }) => id === activeTab);
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
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.mainColor,
            flex: 1
          }}
        >
          {tabs.map(({ title, id }) => (
            <TouchableOpacity
              onPress={() => setActiveTab(id)}
              style={{ flex: 1, padding: 16, justifyContent: "center" }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  color: "white",
                  opacity: activeTab === id ? 1 : 0.5
                }}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.yellow[500],
          height: 4,
          position: "relative",
          top: -4,
          width: width / tabs.length,
          left: (width / tabs.length) * activeTabIndex
        }}
        duration={250}
      />
      <View style={{ overflow: "hidden" }}>
        <View
          style={{
            width: tabs.length * width,
            flexDirection: "row",
            position: "relative",
            left: -width * activeTabIndex
          }}
          duration={250}
        >
          {tabs.map(tab => (
            <View key={tab.id} style={{ width }}>
              {tab.content()}
            </View>
          ))}
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 16, right: 16 }}>
        <TouchableOpacity
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            height: 56,
            width: 56,
            backgroundColor: theme.mainColor,
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "monospace",
              color: "white",
              textAlign: "center",
              fontSize: 24,
              lineHeight: 24
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
