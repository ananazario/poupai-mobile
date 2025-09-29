import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const optionsCardStyles = (colors: Colors) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: colors.background,
        width: '100%'
    },
    text:{
        ...typography.body2,
        color: colors.textColor
    }
})