import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const signupStyles = (colors :  Colors) => StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        minHeight: '100%',
        display: 'flex',
        paddingVertical: 60,
        paddingHorizontal: 30,
    },
    navChevron:{
        padding:8,
    },
    textTitle:{
        paddingBottom: '5%',
    },
    title:{
        ...typography.subtitle1,
        fontWeight: 700,
        color: colors.textColor
    },
    paragraph:{
        color: colors.textColor,
        ...typography.subtitle3,
    },
    content:{
        gap: 15
    },
    textLink:{
        textAlign: 'center',
        color: colors.textColor,
    },
    link:{
        color: colors.textColorBlue
    }
})