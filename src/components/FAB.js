import React from "react";
import View from "components/AnimatedView";
import { TouchableOpacity, Text } from "react-native";
import useTheme from "hooks/useTheme";

export default function FAB() {
  const theme = useTheme();
  return (
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
  );
}
