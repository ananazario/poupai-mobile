import { Button } from "@/app/components/Button";
import { Link, router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { signupStyles } from "./signup.styles";
import { useTheme } from "@/app/theme/ThemeContext";
import { Input } from "@/app/components/Input";

export const SignupView = () => {
  const {colors} = useTheme();
  const styles = signupStyles(colors);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
              <TouchableOpacity onPress={() => router.push("/Login")} style={styles.navChevron}>
                <ChevronLeft color={colors.textColor} />
              </TouchableOpacity>
            <View style={styles.textTitle}>
              <Text style={styles.title}>Cadastre-se</Text>
              <Text style={styles.paragraph}>Com seu email e senha</Text>
            </View>
            <View style={styles.content}>
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
              />
              <Input
                label="Email"
                placeholder="Digite seu email"
                type="email"
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
              />
              <Input
                label="Confirme sua senha"
                placeholder="Digite sua senha novamente"
                type="confirmPassword"
              />
              <Button color="blue" title="Cadastrar" href="/Login" />
              <Text style={styles.textLink}>
                Já poussui uma conta? <Link style={styles.link} href="/Login">Login</Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
