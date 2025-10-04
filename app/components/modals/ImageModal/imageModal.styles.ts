import { Colors } from "@/app/theme/colors"
import { StyleSheet } from "react-native"

export const imageModalStyles = (colors: Colors) => StyleSheet.create({
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
      justifyContent: "flex-end",
      alignItems: "center",
    },
    containerButton:{
        flexDirection: "row",
      justifyContent: 'space-between'
    },
    button: {
      width: "48%",
    },
})