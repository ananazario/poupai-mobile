import { LedgerCard } from "@/app/components/LedgerCard";
import { useTheme } from "@/app/theme/ThemeContext";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { transactionsStyle } from "./transactions.styles";
import { router } from "expo-router";
import { Chip } from "@/app/components/Chip";
import { TransactionsModel } from "./transactions.model";

export const TransactionsView = () => {

    const {colors} = useTheme();
    const styles = transactionsStyle(colors);

    const { chips, toggleChip } = TransactionsModel();

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => router.push("/Home")}>
            <ChevronLeft color={colors.white}/>
          </TouchableOpacity>
          <Text style={styles.navText}>Transações</Text>
          <View />
        </View>
        <View style={styles.containerLedger}>
            <LedgerCard type="income" title="Receitas" amount="R$ 1000,00"/>
            <LedgerCard type="expense" title="Despesas" amount="R$ 1000,00"/>
        </View>
      </View>
      <ScrollView 
      style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        {chips.map((chip) => (
          <Chip key={chip.id} data={chip} onPress={toggleChip} />
        ))}
      </ScrollView>
    </View>
  );
};
