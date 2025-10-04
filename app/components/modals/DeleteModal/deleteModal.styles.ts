import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const deleteModalStyles = (colors : Colors) => StyleSheet.create({
    modalOverlay: {
      backgroundColor: "#00000050",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: colors.background,
      width: 290,
      padding: 20,
      borderRadius: 8,
    },
    nav: {
      alignItems: "flex-end",
    },
    containerContent:{
        gap: 10
    },
    text: {
        color: colors.textColor,
        ...typography.body2,
        textAlign: 'center',
    },
    containerButton:{
        flexDirection: 'row',
        gap: '2%'
        
    },
    button:{
        width: '48%'
    },
})