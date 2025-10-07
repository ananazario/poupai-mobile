
import { useTheme } from "@/app/theme/ThemeContext";
import { ArrowDown, ArrowUp, Repeat } from "lucide-react-native";
import { Text, View } from "react-native";
import { DeleteModal } from "../modals/DeleteModal";
import { EditModal } from "../modals/EditModal";
import { ImageModal } from "../modals/ImageModal";
import { ViewModal } from "../modals/ViewModal";
import { cardTransactionsStyle } from "./cardTransactions.styles";
import { CardTransactionsProps } from "./cardTransactions.types";

export const CardTransactions = ({ transaction }: CardTransactionsProps) => {

  console.log('CardTransactions recebeu:', transaction);

  // Verificação de segurança: se a transação for nula ou indefinida, não renderiza nada
  if (!transaction) {
    return null;
  }
  
  const { colors } = useTheme();
  const styles = cardTransactionsStyle(colors);

  
  const { tipo, categoria, banco, data, valor, id } = transaction;

  const iconMap = {
    receitas: ArrowUp,
    despesas: ArrowDown,
    transferencias: Repeat,
  };

  
  const backgroundColor =
    tipo === "despesas"
      ? colors.redNormal
      : tipo === "receitas"
      ? colors.greenNormal
      : colors.blue500;

  const color =
    tipo === "despesas"
      ? colors.redLight
      : tipo === "receitas"
      ? colors.greenNormal
      : colors.textColorBlue;

  const Icon = iconMap[tipo];

  
  const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={[styles.icon, { backgroundColor }]}>
          <Icon color={colors.white} />
        </View>
        <View>
          
          <Text style={styles.category}>{categoria}</Text>
          <Text style={styles.info}>{banco}</Text>
          <Text style={styles.info}>{dataFormatada}</Text>
          <Text style={[styles.amount, { color }]}>{valorFormatado}</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
       
        <ViewModal transaction={transaction} />
        <EditModal transaction={transaction} />
        <DeleteModal transactionId={id} />
        <ImageModal id={id} />
      </View>
    </View>
  );
};