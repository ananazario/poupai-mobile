import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const transactionsButtonStyles = (colors: Colors) =>
  StyleSheet.create({
    button: {
      position: "absolute", 
      bottom: 50,           
      left: 20,              
      right: 20,
      backgroundColor: colors.blue500,
      paddingVertical: 14,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,         
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      flexDirection: 'row',
      gap: 8
    },
    text: {
      color: colors.white,
      textAlign: "center",
      ...typography.button,
    },
  });
