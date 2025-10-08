import { Colors } from "@/app/theme/colors";
import { StyleSheet } from "react-native";

export const chipStyle = (colors: Colors) => StyleSheet.create({
    container:{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        margin: 4,
        borderWidth: 2
    },
    selected:{
        backgroundColor: colors.blue300,
        borderColor: colors.blue300
    },
    unselected:{
        backgroundColor: "transparent",
        borderColor: colors.textColorBlue
    },
    textSelected:{
        color: colors.white
    },
    textUnselected:{
        color: colors.textColorBlue

    }
})