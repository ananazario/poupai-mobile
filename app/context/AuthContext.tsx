import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// --- MUDANÇA 1: Importar a função de login do Firebase e o tipo User ---
import { AppUser } from '@/app/services/auth/auth.service';
import { auth } from '@/firebaseConfig';
import { User as FirebaseUser, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

interface AuthContextType {
  user: AppUser | null;
  authLoading: boolean;
  // --- MUDANÇA 2: Adicionar a assinatura da função 'login' à nossa interface ---
  login: (email: string, password: string) => Promise<void>;
  // No futuro, você também terá 'logout', 'signup', etc. aqui
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      setUser(firebaseUser as AppUser | null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- MUDANÇA 3: Criar a função de login que chama o Firebase ---
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Você não precisa fazer mais nada aqui (como navegar ou chamar setUser).
      // O 'onAuthStateChanged' acima vai detectar a mudança, atualizar o estado 'user', 
      // e o _layout.tsx fará o redirecionamento para a Home automaticamente.
    } catch (error) {
      // Se o login do Firebase falhar, o erro será "lançado" para a tela de Login,
      // que o pegará no bloco 'catch' e mostrará o Alert para o usuário.
      console.error("ERRO DE LOGIN NO CONTEXTO:", error);
      throw error;
    }
  };

  const value = {
    user,
    authLoading,
    login, // --- MUDANÇA 4: Fornecer a função de login para o resto do app ---
  };

  // Removi o setUser do value. É uma boa prática que apenas o AuthProvider
  // possa modificar o estado do usuário através de funções como login() ou logout().
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};