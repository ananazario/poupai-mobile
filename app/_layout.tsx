

import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-reanimated";
import { AuthProvider, useAuth } from "./context/AuthContext"; // Verifique se o caminho está correto

// Mantém a tela de splash visível enquanto preparamos o app
SplashScreen.preventAutoHideAsync();

const RootLayoutNav = () => {
  const { user, authLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const currentRoute = segments[0]?.toLowerCase();
    
     const isAuthScreen = currentRoute === undefined || currentRoute === 'login' || currentRoute === 'signup';

    if (!authLoading) {
      SplashScreen.hideAsync();

      if (user && isAuthScreen) {
        router.replace('/Home'); // Usa 'H' maiúsculo para corresponder à sua pasta
      } else if (!user && !isAuthScreen) {
        router.replace('/Login'); // Usa 'L' maiúsculo para corresponder à sua pasta
      }
    }
  }, [user, authLoading, segments]);

  // Se a verificação inicial ainda não terminou, mostramos um loader.
  // Isso evita que o Stack seja renderizado brevemente antes do redirecionamento.
  if (authLoading) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
  }

  // Depois da verificação, renderiza o Stack Navigator com todas as suas telas.
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Login/index" />
        <Stack.Screen name="Signup/index" />
        <Stack.Screen name="Home/index" />
        <Stack.Screen name="Settings/index" />
        <Stack.Screen name="Transactions/index" />
        <Stack.Screen name="Expense/index" />
        <Stack.Screen name="Income/index" />
        <Stack.Screen name="Password/index" />
        <Stack.Screen name="Loading/index" /> 
      </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}