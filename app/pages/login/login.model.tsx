import { authService } from "@/app/services/auth/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export const LoginModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);

  const handleLogin = async () => {
    await authService.login(email, password);

    if (stayConnected) {
      await AsyncStorage.setItem("USER_EMAIL", email);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword
  }
}