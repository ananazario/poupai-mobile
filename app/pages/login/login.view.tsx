import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useTheme } from "@/app/theme/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { loginStyles } from "./login.styles";

// 1. Define as props que a View vai receber do Controlador (login.tsx)
interface LoginViewProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isChecked: boolean;
  setChecked: (value: boolean) => void;
  onLoginPress: () => void;
  isLoading: boolean;
}

// 2. O componente agora aceita as props
export const LoginView = ({
  email,
  setEmail,
  password,
  setPassword,
  isChecked,
  setChecked,
  onLoginPress,
  isLoading,
}: LoginViewProps) => {
  const { colors } = useTheme();
  const styles = loginStyles(colors);

  // 3. A lógica de chamar o model foi REMOVIDA daqui

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
              {/* 4. Os componentes agora usam as props recebidas */}
              <Input
                type="email"
                label="Email"
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
              <Input
                type="password"
                label="Senha"
                placeholder="Digite sua Senha"
                value={password}
                onChangeText={setPassword}
              />

              <View style={styles.checkSection}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? colors.blue500 : colors.border}
                />
                <Text style={styles.textCheck}>Permanecer conectado</Text>
              </View>

              <Button
                onPress={onLoginPress}
                title={isLoading ? "Entrando..." : "Entrar"}
                color="blue"
                disabled={isLoading}
              />

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
                  <FontAwesome
                    name="google"
                    size={26}
                    color={colors.textColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};