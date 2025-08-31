import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const buttonStyles = (colors : Colors) => StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        width: '100%',
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    text: {
        textAlign: 'center',
        ...typography.button
    },
})