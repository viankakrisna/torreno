import React from "react";
import { Animated } from "react-native";
import useAnimatedStyle from "hooks/useAnimatedStyle";

export default function AnimatedView({ style = {}, duration = 0, children }) {
  const animatedStyle = useAnimatedStyle({
    style,
    duration
  });
  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
