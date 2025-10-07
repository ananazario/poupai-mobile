import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { Platform, StyleSheet } from "react-native";

export const ledgerCardStyle = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 8,
      backgroundColor: colors.backgroundSecondary,
      padding: Platform.select({
        ios: 8,
        android: 8,
        web: 10,
      }),
      gap: 10,
      alignItems: "center",
    },
    icon: {
      width: 35,
      height: 35,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      ...typography.body2,
      color: colors.textColor,
    },
    amount: {
      ...Platform.select({
        ios: typography.body2,
        web: typography.body1,
        android: typography.body1,
      }),
      color: colors.textColor,
      fontWeight: 600
    },
  });
