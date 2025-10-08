import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useTheme } from "@/app/theme/ThemeContext";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { passwordStyle } from "./password.styles";
import { router } from "expo-router";
import { passwordModel } from "./password.model";

export const PasswordView = () => {
  const {
    newPassword,
    handleNewPassword,
    confirmPassword,
    handleConfirmPassword,
    handleChangePassword,
    isLoading,
  } = passwordModel();

  const { colors } = useTheme();
  const styles = passwordStyle(colors);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/Settings")}>
        <ChevronLeft color={colors.textColor} />
      </TouchableOpacity>
      <View style={styles.containerContent}>
        <Input
          type="password"
          placeholder="Nova senha"
          label="Digite sua nova senha"
          value={newPassword}
            onChangeText={handleNewPassword}
        />
        <Input 
            type="password" 
            placeholder="Confirme a nova senha" 
            label="Confirme a nova senha"
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
        />
        <Button
          color="blue"
          title={isLoading ? "Alterando..." : "Alterar"}
          onPress={handleChangePassword}
          disabled={isLoading}
        />
      </View>
      <View />
    </View>
  );
};
