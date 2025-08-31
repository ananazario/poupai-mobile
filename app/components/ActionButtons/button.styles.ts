import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const actionButtonsStyle = (colors : Colors) => StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center'
    },
    containerIcon:{
        backgroundColor: colors.backgroundSecondary,
        padding: 15,
        borderRadius: 30
    },
    text:{
        color: colors.textColor,
        ...typography.body5
    },
})