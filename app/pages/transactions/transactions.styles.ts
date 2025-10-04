import { Colors } from "@/app/theme/colors";
import { StyleSheet } from "react-native";

export const transactionsStyle = (colors : Colors) => StyleSheet.create({
    container:{
        height: '100%', 
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: colors.background
    },
    containerInfo:{
        padding: 20,
        backgroundColor: colors.blue500,
        borderRadius: 8,
        gap: 15
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerLedger:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})