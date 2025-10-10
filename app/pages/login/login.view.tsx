import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useTheme } from "@/app/theme/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useLoginModel } from "./login.model";
import { loginStyles } from "./login.styles";

export const LoginView = () => {
  const {
    email,
    handleEmail,
    password,
    handlePassword,
    isChecked,
    setChecked,
    handleLogin,
  } = useLoginModel()

  const {colors} = useTheme();
  const styles = loginStyles(colors);

  return (
    <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  <TouchableWithoutFeedback accessible={false}>
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => router.push("/")} style={styles.chevron}>
            <ChevronLeft color={colors.textColor} />
          </TouchableOpacity>
        </View>

        <View style={styles.textTitle}>
          <Text style={styles.title}>Acesse</Text>
          <Text style={styles.paragraph}>Com seu login e senha</Text>
        </View>

        <View style={styles.content}>
          <Input type="text" label="Email" placeholder="Digite seu email" value={email} onChangeText={handleEmail} />
          <Input type="password" label="Senha" placeholder="Digite sua Senha" value={password} onChangeText={handlePassword} />

          <View style={styles.checkSection}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? colors.blue500 : colors.border}
            />
            <Text style={styles.textCheck}>Permanecer conectado</Text>
          </View>

          <Button onPress={handleLogin} title="Entrar" color="blue" />

          <Text style={styles.textLink}>
            Ainda não tem uma conta?{" "}
            <Link href="/Signup" style={styles.link}>
              Cadastre-se
            </Link>
          </Text>

          <View style={styles.containerLine}>
            <View style={styles.line} />
            <Text style={styles.text}>Ou continue com</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={26} color={colors.textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>

  );
};
