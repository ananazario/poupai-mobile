import { login } from "@/app/services/auth/auth.service";
import { router } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext"; 
import { Alert } from "react-native";

export function loginModel() {
  const { setUser } = useAuth(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setChecked] = useState(false);

  const handleEmail = (value: string) => setEmail(value);
  const handlePassword = (value: string) => setPassword(value);

 async function handleLogin() {
  if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha o e-mail e a senha.");
      return; 
  }

  try {
    const user = await login(email, password); 
    
    console.log("Bem-vindo,", user?.displayName); 
    setUser(user); 
    router.push("/Home"); 

  } catch (err: any) {
    Alert.alert("Erro de Login", err.message);
  }
}

  return {
    isChecked,
    setChecked,
    email,
    handleEmail,
    password,
    handlePassword,
    handleLogin,
  };
}