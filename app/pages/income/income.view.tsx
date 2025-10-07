import { CardTransactions } from "@/app/components/CardTransactions";
import { Chip } from "@/app/components/Chip";
import { LedgerCard } from "@/app/components/LedgerCard";
import { Search } from "@/app/components/Search";
import { useTheme } from "@/app/theme/ThemeContext";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { IncomeModel } from "./income.model";
import { incomeStyles } from "./income.styles";
import { TransactionsButton } from "@/app/components/TransactionButton";

export const IncomeView = () => {
  const { colors } = useTheme();
  const styles = incomeStyles(colors);

  const { chips, toggleChip } = IncomeModel();

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => router.push("/Home")}>
            <ChevronLeft color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.navText}>Receitas</Text>
          <View />
        </View>
        <View style={styles.containerLedger}>
          <LedgerCard type="income" title="Receitas" amount="R$ 1000,00" />
          <LedgerCard type="expense" title="Despesas" amount="R$ 1000,00" />
        </View>
      </View>
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {chips.map((chip) => (
          <Chip key={chip.id} data={chip} onPress={toggleChip} />
        ))}
      </ScrollView>
      <Search />
      <View>
        <ScrollView style={styles.cards} showsHorizontalScrollIndicator={false}>
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          <CardTransactions type="receitas" />
          
        </ScrollView>
      </View>
      <TransactionsButton text="Adicionar Receita" />
    </View>
  );
};
