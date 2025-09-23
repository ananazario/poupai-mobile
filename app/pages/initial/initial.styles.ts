import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const initialStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.blue500,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 30,
      gap: 30,
    },
    image: {
      width: width * 0.9,
      height: undefined,
      aspectRatio: 1,
    },
    content: {
      gap: 5,
    },
    title: {
      ...typography.subtitle2,
      fontWeight: 700,
      textAlign: "center",
      color: colors.white,
    },
    text: {
      ...typography.body2,
      textAlign: "center",
      color: colors.white,
    },
  });
