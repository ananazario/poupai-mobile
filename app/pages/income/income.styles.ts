import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const incomeStyles = (colors: Colors) => StyleSheet.create({
    container:{
        height: '100%', 
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: colors.background,
        gap: 20
    },
    containerInfo:{
        padding: 10,
        backgroundColor: colors.blue500,
        borderRadius: 8,
        gap: 15
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navText:{
        color: colors.white,
        ...typography.body2
    },
    containerLedger:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carousel:{
        minHeight: 50,
        maxHeight: 50
    },
    cards:{
        minHeight: '80%',
        maxHeight: "80%"
    }
    
})