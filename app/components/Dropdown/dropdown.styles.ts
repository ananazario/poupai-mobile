import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const dropdownStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 5,
      width: '100%'
    },
    label: {
      ...typography.body3,
      color: colors.textColor,
    },
    dropdown: {
      maxHeight: 60,
      borderWidth: 1,
      borderRadius: 8,
      padding: 15,
      justifyContent: "center",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });
