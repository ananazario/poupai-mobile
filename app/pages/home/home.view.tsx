import { Text, TouchableOpacity, View } from "react-native";
import { Bolt } from "lucide-react-native";
import { useTheme } from "@/app/theme/ThemeContext";
import { homeStyles } from "./home.styles";
import { ActionButtons } from "@/app/components/ActionButtons";
import { LedgerCard } from "@/app/components/LedgerCard";
import { router } from "expo-router";
import { useAuth } from "@/app/context/AuthContext";

export const HomeView = () => {
  const { colors } = useTheme();
  const styles = homeStyles(colors);

  const { user } = useAuth();
  const userName = user?.displayName || "Usuário";

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View>
          <Text style={styles.name}>Olá {userName}!</Text>
          <Text style={styles.text}>Saldo total em conta</Text>
          <Text style={styles.amount}>R$ 0,00</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/Settings")}>
          <Bolt color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerActions}>
        <ActionButtons title="Receitas" type="receitas"></ActionButtons>
        <ActionButtons title="Despesas" type="despesas"></ActionButtons>
        <ActionButtons
          title="Transfêrencia"
          type="transferencias"
        ></ActionButtons>
        <ActionButtons title="Extrato" type="extrato"></ActionButtons>
      </View>
      <View style={styles.containerCard}>
        <LedgerCard title="Receitas" amount="1000,60" type="income" />
        <LedgerCard title="Despesas" amount="3100,20" type="expense" />
      </View>
    </View>
  );
};
