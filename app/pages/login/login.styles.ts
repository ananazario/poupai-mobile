import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const loginStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingVertical: 60,
      paddingHorizontal: 30,
    },
    chevron: {
      padding: 8,
    },
    textTitle: {
      paddingBottom: "5%",
    },
    title: {
      ...typography.subtitle1,
      fontWeight: 700,
      color: colors.textColor,
    },
    paragraph: {
      ...typography.subtitle3,
      color: colors.textColor,
    },
    content:{
        gap: 20
    },
    checkSection: {
      flexDirection: "row",
      gap: 5,
    },
    textCheck: {
      color: colors.textColor,
    },
    textLink: {
      textAlign: "center",
      color: colors.textColor,
    },
    link: {
      color: colors.textColorBlue,
    },
containerLine: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: colors.border,
    },
    text: {
      marginHorizontal: 10,
      color: colors.textColor
    },
    socialContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
    },
    socialButton:{
      width: 55,
      height: 55,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 55/2,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 3
    },
  });
