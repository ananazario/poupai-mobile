import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const settingsStyles = (colors: Colors) => StyleSheet.create({
    container:{
        height: '100%',
        paddingVertical: 60,
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        backgroundColor: colors.background
    },
    nav:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chevron: {
        padding: 8
    },
    text: {
        ...typography.body1,
        color: colors.textColorBlue
    },
    
})