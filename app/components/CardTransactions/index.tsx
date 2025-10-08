import { Text, View } from "react-native";
import { CardTransactionsProps } from "./cardTransactions.types";
import { ArrowDown, ArrowUp, Repeat } from "lucide-react-native";
import { cardTransactionsStyle } from "./cardTransactions.styles";
import { useTheme } from "@/app/theme/ThemeContext";
import { ViewModal } from "../modals/ViewModal";
import { EditModal } from "../modals/EditModal";
import { DeleteModal } from "../modals/DeleteModal";
import { ImageModal } from "../modals/ImageModal";

export const CardTransactions = ({ type }: CardTransactionsProps) => {
  const { colors } = useTheme();
  const styles = cardTransactionsStyle(colors);

  const iconMap = {
    receitas: ArrowUp,
    despesas: ArrowDown,
    transferencias: Repeat,
  };

  const backgroundColor =
    type === "despesas"
      ? colors.redNormal
      : type === "receitas"
      ? colors.greenNormal
      : colors.blue500;

      const color =
    type === "despesas"
      ? colors.redLight
      : type === "receitas"
      ? colors.greenNormal
      : colors.textColorBlue;

  const Icon = iconMap[type];

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={[styles.icon, { backgroundColor }]}>
          <Icon color={colors.white} />
        </View>
        <View>
            <Text style={styles.category}>Categoria</Text>
            <Text style={styles.info}>Banco</Text>
            <Text style={styles.info}>Data</Text>
            <Text style={[styles.amount, { color }]}>Valor</Text>
        </View>
      </View>
        <View style={styles.containerRight}>
            <ViewModal amount="0,00" type="receitas"/>
            <EditModal type="receitas"/>
            <DeleteModal/>
            <ImageModal id={'1'}/>
        </View>
    </View>
  );
};
