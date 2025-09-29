import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const viewModalStyles = (colors : Colors) => StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: colors.background,
      padding: 20,
      width: 290,
      borderRadius: 8,
      gap: 15,
    },
    nav: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center'
    },
    title: {
      color: colors.textColor,
      ...typography.body2,
      fontWeight: 700,

    },
    container: {
      gap: 5
    },
    line: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 10,
    },
    textTitle: {
      color: colors.textColor,
      ...typography.body3,
      fontWeight: 600
    },
    text: {
      color: colors.textColor,
      ...typography.body3,
    },
})