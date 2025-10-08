import { signUp } from "@/app/services/auth/auth.service";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function signupModel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (value: string) => setName(value);
  const handleEmail = (value: string) => setEmail(value);
  const handlePassword = (value: string) => setPassword(value);
  const handleConfirmPassword = (value: string) => setConfirmPassword(value);

  async function handleSignUp() {
try {
      if (!name || !email || !password || !confirmPassword) {
        const msg = "Preencha todos os campos.";
        setMessage(msg);
        Alert.alert("Atenção", msg);
        return;
      }

      if (password !== confirmPassword) {
        const msg = "As senhas não coincidem.";
        setMessage(msg);
        Alert.alert("Erro", msg);
        return;
      }

      const user = await signUp(email, password, name);

      console.log("Usuário cadastrado:", user?.displayName || name);

      const msg = "Usuário cadastrado com sucesso!";
      setMessage(msg);
      Alert.alert("Sucesso", msg, [
        { text: "OK", onPress: () => router.push("/Login") },
      ]);
    } catch (err: any) {
      console.error("Erro no cadastro:", err.message);
      let msg = "";

      if (err.message.includes("auth/email-already-in-use")) {
        msg = "Este email já está em uso.";
      } else if (err.message.includes("auth/invalid-email")) {
        msg = "O email informado é inválido.";
      } else if (err.message.includes("auth/weak-password")) {
        msg = "A senha deve ter pelo menos 6 caracteres.";
      } else {
        msg = "Erro ao cadastrar. Tente novamente.";
      }

      setMessage(msg);
      Alert.alert("Erro", msg);
    }
  }

  return {
    name,
    handleName,
    email,
    handleEmail,
    password,
    handlePassword,
    confirmPassword,
    handleConfirmPassword,
    handleSignUp,
    message,
  };
}
