import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const editModalStyles = (colors: Colors) => StyleSheet.create({
    modalOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      width: 290,
      padding: 20,
      backgroundColor: colors.background,
      borderRadius: 8,
      gap: 15,
      overflow: "hidden",
    },
    nav: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    containerInput: {
      gap: 10,
    },
    title: {
      color: colors.textColor,
      ...typography.body2,
      fontWeight: 700,
    },
    containerFlex: {
      width: "100%",
      flexDirection: "row",
      gap: 10,
    },
    input: {
      width: "48%",
    },
    containerButton:{
      flexDirection: "row",
      justifyContent: 'space-between'
    },
    button: {
      width: "48%",
    },
})