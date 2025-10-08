import { CardTransactions } from "@/app/components/CardTransactions";
import { Chip } from "@/app/components/Chip";
import { LedgerCard } from "@/app/components/LedgerCard";
import { Search } from "@/app/components/Search";
import { TransactionsButton } from "@/app/components/TransactionButton";
import { Transacao } from "@/app/models/transaction.model";
import { useTheme } from "@/app/theme/ThemeContext";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { incomeStyles } from "./income.styles";

// 1. Definimos as props que a View vai receber do seu controlador (index.tsx)
interface IncomeViewProps {
  transactions: Transacao[];
  loading: boolean;
  chips: any[]; // Você pode criar um tipo mais específico para 'Chip' depois
  toggleChip: (id: any) => void;
}

// 2. O componente agora aceita as props
export const IncomeView = ({
  transactions = [],
  loading,
  chips,
  toggleChip,
}: IncomeViewProps) => {
  const { colors } = useTheme();
  const styles = incomeStyles(colors);

  return (
    <View style={styles.container}>
      {/* --- Seu Cabeçalho (Permanece igual) --- */}
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

      {/* --- Seus Filtros e Busca (Permanece igual) --- */}
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {chips?.map((chip) => (
          <Chip key={chip.id} data={chip} onPress={() => toggleChip(chip.id)} />
        ))}
      </ScrollView>
      <Search />

      {/* --- 3. A Lista de Transações (Agora é dinâmica) --- */}
      <View style={{ flex: 1 }}>
        {loading ? (
          // Se estiver carregando, mostra o indicador de loading
          <ActivityIndicator
            size="large"
            color={colors.blue500}
            style={{ marginTop: 50 }}
          />
        ) : transactions.length === 0 ? (
          // Se não houver transações, mostra uma mensagem
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              color: colors.textColor,
            }}
          >
            Nenhuma receita encontrada.
          </Text>
        ) : (
          // Se houver transações, renderiza a FlatList
          <FlatList
            data={transactions}
            renderItem={({ item }) => <CardTransactions transaction={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, paddingTop: 10 }}
          />
        )}
      </View>

      <TransactionsButton text="Adicionar Receita" />
    </View>
  );
};