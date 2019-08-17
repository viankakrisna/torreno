import { useLayoutEffect, useState, useCallback } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";

  const getSize = useCallback(
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    },
    [isClient]
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useLayoutEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
