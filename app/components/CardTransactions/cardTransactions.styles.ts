import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const cardTransactionsStyle = (colors:Colors) => StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colors.background,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon:{
        padding: 10,
        borderRadius: 32,
        maxHeight: '100%'
    },
    containerLeft:{
        flexDirection: 'row',
        alignItems: 'center',
         gap: 8
    },
    category:{
        color: colors.textColor,
        ...typography.body2,
        fontWeight: 600
    },
    info:{
        color: colors.textColor,
        ...typography.body3,
    },
    amount:{
        ...typography.body2,
        fontWeight: 600

    },
    containerRight:{
        gap: 16,
        flexDirection: 'row',
    },
})