import { Text, View } from "react-native";
import { LedgerCardProps } from "./ledger.types";
import { useTheme } from "@/app/theme/ThemeContext";
import { ArrowDown, ArrowUp } from "lucide-react-native";
import { ledgerCardStyle } from "./ledger.styles";

export const LedgerCard = ({ type, title, amount }: LedgerCardProps) => {
  const { colors } = useTheme();
  const styles = ledgerCardStyle(colors);

  const iconMap = {
    income: ArrowUp,
    expense: ArrowDown,
  };

  const Icon = iconMap[type];

  const backgroundColor = type === "income" ? colors.greenNormal : colors.redNormal;
  const color = type === "income" ? colors.greenNormal : colors.redNormal;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.amount, {color}]}>{amount}</Text>
      </View>
      <View style={[styles.icon, {backgroundColor}]}>
        <Icon color={colors.white} />
      </View>
    </View>
  );
};
