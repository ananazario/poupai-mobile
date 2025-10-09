import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useTheme } from "@/app/theme/ThemeContext";
import { Link, router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { signupModel } from "./signup.model";
import { signupStyles } from "./signup.styles";
import { SignupProps } from "./signup.type";

export const SignupView = (props: SignupProps) => {
  const {
     name,
    handleName,
    email,
    handleEmail,
    password,
    handlePassword,
    confirmPassword, 
    handleConfirmPassword,
    handleSignUp,
    message 
  }  = signupModel();

  const {colors} = useTheme();
  const styles = signupStyles(colors);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback accessible={false}>
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
                value={name}
                onChangeText={handleName}
              />
              <Input
                label="Email"
                placeholder="Digite seu email"
                type="email"
                value={email}
                onChangeText={handleEmail}
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                value={password}
                onChangeText={handlePassword}
              />
              <Input
                label="Confirme sua senha"
                placeholder="Digite sua senha novamente"
                type="confirmPassword" 
                value={confirmPassword}
                onChangeText={handleConfirmPassword}
              />
              <Button onPress={handleSignUp} color="blue" title="Cadastrar" href="/Login" />
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
