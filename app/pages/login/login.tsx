import { useAuth } from '@/app/context/AuthContext'; // Verifique o caminho do seu AuthContext
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { LoginView } from './login.view'; // Importa a parte visual


const LoginController = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setChecked] = useState(false); 

  
  const { login } = useAuth();

  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Por favor, preencha e-mail e senha.");
      return;
    }
    setIsLoading(true);
    try {
      await login(email, password);
    
    } catch (error: any) {
      Alert.alert("Erro de Login", error.message || "Ocorreu um erro ao tentar fazer login.");
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onLoginPress={handleLogin}
      isLoading={isLoading}
      isChecked={isChecked}
      setChecked={setChecked}
    />
  );
};

export default LoginController;