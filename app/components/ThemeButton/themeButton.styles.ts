import { Colors } from "@/app/theme/colors";
import { StyleSheet } from "react-native";

export const themeButtonStyles = (colors: Colors) =>
  StyleSheet.create({
    button: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });
