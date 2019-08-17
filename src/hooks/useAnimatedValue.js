import { useLayoutEffect, useState } from "react";
import { Animated } from "react-native";

export default function useAnimatedValue({ value, duration }) {
  const [animationValue] = useState(() => new Animated.Value(value));
  useLayoutEffect(() => {
    Animated.parallel([
      Animated.timing(animationValue, {
        toValue: value,
        duration
      })
    ]).start();
  }, [value, duration, animationValue]);
  return animationValue;
}
