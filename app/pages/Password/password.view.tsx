import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useTheme } from "@/app/theme/ThemeContext";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { passwordStyle } from "./password.styles";
import { router } from "expo-router";

export const PasswordView = () => {

    const {colors} = useTheme();
    const styles = passwordStyle(colors);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/Settings')}>
        <ChevronLeft />
      </TouchableOpacity>
      <View style={styles.containerContent}>
        <Input type="text" placeholder="Nova senha" label="Digite sua nova senha"/>
        <Button color="blue" title="Alterar"/>
      </View>
      <View />
    </View>
  );
};
