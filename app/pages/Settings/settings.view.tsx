import { OptionsCard } from "@/app/components/OptionsCard";
import { useAuth } from "@/app/context/AuthContext";
import { deleteAccount } from "@/app/services/auth/auth.service";
import { useTheme } from "@/app/theme/ThemeContext";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { settingsModel } from "./settings.model";
import { settingsStyles } from "./settings.styles";

export const SettingsView = () => {
  const { colors } = useTheme();
  const styles = settingsStyles(colors);

  const { handleLogout } = settingsModel();

  const { user } = useAuth();
  const userName = user?.displayName || "Usuário";

  const handleDeleteAccount = async () => {
      Alert.alert(
        "Excluir conta",
        "Tem certeza que deseja excluir sua conta?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            style: "destructive",
            onPress: async () => {
              await deleteAccount();
            },
          },
        ]
      );
    };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.push("/Home")}>
          <ChevronLeft color={colors.textColor} />
        </TouchableOpacity>
        <Text style={styles.text}>Olá {userName}!</Text>
        <View></View>
      </View>
      <OptionsCard type="theme" />
      <OptionsCard
        type="default"
        title="Alterar senha"
        onPress={() => router.push("/Password")}
      />
      <OptionsCard type="default" title="Excluir conta" onPress={handleDeleteAccount} />
      <OptionsCard type="default" title="Sair" onPress={handleLogout} />
    </View>
  );
};
