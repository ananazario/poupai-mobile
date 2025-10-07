// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Suas credenciais do Firebase que você copiou do console
const firebaseConfig = {
  apiKey: "AIzaSyB0XH-GXpz_BzAoK_9k5JpXTudjqkM8M3I",
  authDomain: "poupai-mobile.firebaseapp.com",
  projectId: "poupai-mobile",
  storageBucket: "poupai-mobile.appspot.com",
  messagingSenderId: "148478651789",
  appId: "1:148478651789:web:b54fd1f56dea50ba3de1c4",
  measurementId: "G-69MHTF2DBP",
};

// Inicializa o Firebase
export const app = initializeApp(firebaseConfig);

// Exporta os serviços que você vai usar no seu app
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

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

