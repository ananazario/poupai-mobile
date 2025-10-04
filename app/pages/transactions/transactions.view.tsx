import { LedgerCard } from "@/app/components/LedgerCard";
import { useTheme } from "@/app/theme/ThemeContext";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { transactionsStyle } from "./transactions.styles";
import { router } from "expo-router";
import { Search } from "@/app/components/Search";

export const TransactionsView = () => {

    const {colors} = useTheme();
    const styles = transactionsStyle(colors);

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => router.push("/Home")}>
            <ChevronLeft color={colors.textColor}/>
          </TouchableOpacity>
          <Text>Transações</Text>
          <View />
        </View>
        <View style={styles.containerLedger}>
            <LedgerCard type="income" title="Receitas" amount="R$ 0,00"/>
            <LedgerCard type="expense" title="Despesas" amount="R$ 0,00"/>
        </View>
      </View>
      <Search/>
    </View>
  );
};
