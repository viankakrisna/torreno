import React, { useState } from 'react';
import View from 'components/AnimatedView';
import { Text, TouchableOpacity } from 'react-native';
import useTheme from 'hooks/useTheme';
import useWindowSize from 'hooks/useWindowSize';

export default function Tabs({ children, tabs = children, initialTab }) {
  const { width } = useWindowSize();

  const [activeTab, setActiveTab] = useState(initialTab);
  const theme = useTheme();
  const activeTabIndex = tabs.findIndex(({ id }) => id === activeTab);
  return <View>
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
        backgroundColor: theme.accentColor,
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
  </View>
}