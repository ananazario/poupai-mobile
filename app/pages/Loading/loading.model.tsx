import { useEffect } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

export const LoadingModel = () => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 }, () => {
      opacity.value = withTiming(0, { duration: 500 });
    });
  }, []);

  return { opacity };
};
