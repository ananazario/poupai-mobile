import { Colors } from "@/app/theme/colors";
import { StyleSheet } from "react-native";

export const themeButtonStyles = (colros : Colors) => StyleSheet.create({
    button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
})