import { Colors } from "@/app/theme/colors";
import { StyleSheet } from "react-native";

export const passwordStyle = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingVertical: 60,
      paddingHorizontal: 30,
      justifyContent: 'space-between'
    },
    containerContent:{
        gap: 8
    }
  });
