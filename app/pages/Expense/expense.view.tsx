import { CardTransactions } from "@/app/components/CardTransactions";
import { Chip } from "@/app/components/Chip";
import { LedgerCard } from "@/app/components/LedgerCard";
import { Search } from "@/app/components/Search";
import { TransactionsButton } from "@/app/components/TransactionButton";
import { useTheme } from "@/app/theme/ThemeContext";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ExpenseModel } from "./expense.model";
import { expenseStyle } from "./expense.style";

export const ExpenseView = () => {
  const { colors } = useTheme();
  const styles = expenseStyle(colors);

  const { chips, toggleChip } = ExpenseModel();

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => router.push("/Home")}>
            <ChevronLeft color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.navText}>Despesas</Text>
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
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
          <CardTransactions type="despesas" />
        </ScrollView>
      </View>
      <TransactionsButton text="Adicionar Despesa" />
    </View>
  );
};
