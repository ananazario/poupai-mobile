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
  // storageBucket: "poupai-mobile.firebasestorage.app",
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
