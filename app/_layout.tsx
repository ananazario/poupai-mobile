

import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { auth } from '../firebaseConfig'; // Verifique se o caminho está correto

// 1. Diz ao app para manter a tela de splash visível automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // O "ouvinte" do Firebase que verifica o status do login
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Assim que a primeira verificação é feita, marcamos o carregamento como concluído
      if (authLoading) {
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Se o carregamento da autenticação terminou E ainda não temos um usuário...
    if (!authLoading && !user) {
      // ...tentamos fazer o login anônimo para desenvolvimento.
      signInAnonymously(auth).catch((error) => {
        console.error("Erro no login anônimo de desenvolvimento:", error);
        Alert.alert(
          "Erro de Desenvolvimento",
          `Não foi possível fazer o login anônimo: ${error.message}`
        );
        // Mesmo se o login falhar, escondemos a splash screen para não travar o app
        SplashScreen.hideAsync();
      });
    }
  }, [authLoading, user]);

  useEffect(() => {
    // 2. Fica vigiando: Assim que o carregamento da autenticação terminar...
    if (!authLoading) {
      // ...mandamos esconder a tela de splash.
      SplashScreen.hideAsync();
    }
  }, [authLoading]); // ...este efeito roda sempre que 'authLoading' muda.


  // 3. Enquanto a verificação inicial não termina, não renderizamos nada.
  // A tela de splash nativa continuará visível.
  if (authLoading) {
    return null;
  }

  // Se, após o carregamento, ainda não tivermos um usuário (ex: login anônimo falhou),
  // mostramos uma tela de loading para esperar a tentativa de login anônimo terminar.
  if (!user) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
  }

  // 4. Quando o carregamento termina E temos um usuário, renderizamos o aplicativo.
  return <Slot />;
}


// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Suas credenciais do Firebase que você copiou do console
// const firebaseConfig = {
//   apiKey: "AIzaSyB0XH-GXpz_BzAoK_9k5JpXTudjqkM8M3I", // <-- ATENÇÃO: Veja o aviso de segurança abaixo
//   authDomain: "poupai-mobile.firebaseapp.com",
//   projectId: "poupai-mobile",
//   storageBucket: "poupai-mobile.appspot.com",
//   messagingSenderId: "148478651789",
//   appId: "1:148478651789:web:b54fd1f56dea50ba3de1c4",
//   measurementId: "G-69MHTF2DBP",
// };

// // --- MUDANÇA: Adicionado bloco de depuração try...catch ---

// // Declaramos as variáveis fora do try para que possam ser exportadas
// let app, auth, db, storage;

// try {
//   // Inicializa o Firebase
//   app = initializeApp(firebaseConfig);
//   // Inicializa os serviços
//   auth = getAuth(app);
//   db = getFirestore(app);
//   storage = getStorage(app);
  
//   // Se chegar até aqui, a inicialização foi bem-sucedida
//   console.log("✅ [firebaseConfig.js] Firebase inicializado com SUCESSO!");

// } catch (error) {
//   // Se ocorrer qualquer erro durante a inicialização, ele será capturado aqui
//   console.error("❌ [firebaseConfig.js] ERRO GRAVE ao inicializar o Firebase:", error);
//   // Lançar o erro pode ajudar a mostrá-lo na tela vermelha do Expo
//   throw error;
// }

// // Exporta as variáveis inicializadas
// export { app, auth, db, storage };
