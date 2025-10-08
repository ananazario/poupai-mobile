import React from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { loadingStyles } from "./loading.styles";
import { useTheme } from "@/app/theme/ThemeContext";
import { LoadingModel } from "./loading.model";


export const LoadingView = () => {
  const { colors } = useTheme();
  const styles = loadingStyles(colors);
  const { opacity } = LoadingModel();

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    textShadowColor: colors.white,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  }));

  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Animated.Text style={[styles.brand, animatedTextStyle]}>
        Poup.ai
      </Animated.Text>
    </View>
  );
};
