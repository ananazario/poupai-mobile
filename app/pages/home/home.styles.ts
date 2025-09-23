import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";


export const homeStyles = (colors : Colors) => StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 30,
        gap: 15,
        backgroundColor: colors.background,
        flex: 1
    },
    account:{
         backgroundColor: colors.blue500,
        padding: 20,
        justifyContent: 'space-between',
        borderRadius: 8,
        flexDirection: 'row',
    },
    name:{
        color: colors.white,
        ...typography.heading4,
    },
    text: {
        color: colors.white,
        ...typography.subtitle3
    },
    amount: {
        color: colors.white,
        ...typography.heading3
    },
    config:{
        padding: 15
    },
    containerActions:{
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    containerCard:{
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
})