import { auth, db } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
  User
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export interface AppUser extends User {
  displayName: string | null; 
}

function getFirebaseErrorMessage(code: string) {
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'Este e-mail já está sendo usado.',
    'auth/invalid-email': 'E-mail inválido.',
    'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/too-many-requests': 'Muitas tentativas, tente novamente mais tarde.',
    'auth/network-request-failed': 'Sem conexão com a internet.',
  };
 
  return messages[code] || 'Ocorreu um erro. Tente novamente.';
}

export async function signUp(email: string, password: string, name: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: new Date().toISOString()
    });

    return user as AppUser; 
  } catch (error: any) {
    throw new Error(getFirebaseErrorMessage(error.code));
  }
}

export async function login(email: string, password: string): Promise<AppUser> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const name = userDoc.exists() ? userDoc.data()?.name : user.displayName;

    return { ...user, displayName: name } as AppUser; 
  } catch (error: any) {
    throw new Error(getFirebaseErrorMessage(error.code));
  }
}

export async function logout() {
  try {
    await signOut(auth);
    console.log("Usuário desconectado");
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updatePasswordInFirebase(newPassword: string) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  try {
     await updatePassword(user, newPassword);
    console.log("Senha atualizada com sucesso.");
  } catch (error: any) {
    throw new Error(error.message); 
  }
}


export async function deleteAccount() {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Nenhum usuário autenticado encontrado.");
    }

    await deleteUser(user);
    console.log("Conta excluída com sucesso!");
  } catch (error: any) {
    console.error("Erro ao excluir conta:", error.message);
  }
}