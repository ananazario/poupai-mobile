import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { Platform, StyleSheet } from "react-native";

export const inputStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 5,
    },
    label: {
      ...typography.body2,
      color: colors.textColor,
    },
    inputContainer: {
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 8,
      paddingVertical: Platform.OS === "ios" ? 12 : 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 50,
    },
    input: {
      ...typography.body2,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    pickerContainer: {
        backgroundColor: colors.background,
        color: colors.textColor,
        borderRadius: 10,
        padding: 20
    },
    doneButton: {
        marginTop: 10,
        alignSelf: 'flex-end'
    },
  });
