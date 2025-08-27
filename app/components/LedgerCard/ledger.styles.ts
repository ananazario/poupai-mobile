import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { Platform, StyleSheet } from "react-native";

export const ledgerCardStyle = (colors: Colors) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 8,
      backgroundColor: colors.backgroundSecondary,
      padding: Platform.select({
        ios: 8,
        android: 10,
        web: 10,
      }),
      gap: 2,
      alignItems: "center",
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      ...typography.body3,
      color: colors.textColor,
    },
    amount: {
      ...Platform.select({
        ios: typography.body3,
        web: typography.body2,
        android: typography.body2,
      }),
      color: colors.textColor,
    },
  });
