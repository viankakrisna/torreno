import { useState, useMemo, useLayoutEffect } from "react";
import { Animated } from "react-native";

export default function useAnimatedValue({ style, duration }) {
  const animatableStyleKeys = useMemo(
    () => Object.keys(style).filter(key => Number.isInteger(style[key])),
    [style]
  );
  const [animations] = useState(() =>
    animatableStyleKeys.reduce((res, key) => {
      res[key] = new Animated.Value(style[key]);
      return res;
    }, {})
  );
  useLayoutEffect(() => {
    const animation = Animated.parallel(
      animatableStyleKeys.map(key =>
        Animated.timing(animations[key], {
          toValue: style[key],
          duration
        })
      )
    );
    animation.start();
  }, [animations, duration, style, animatableStyleKeys]);
  return useMemo(
    () => ({
      ...style,
      ...animations
    }),
    [animations, style]
  );
}
