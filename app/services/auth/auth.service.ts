import { auth, db } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  reload,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export interface AppUser extends User {
  displayName: string | null; 
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

    console.log('Usuário criado:', name);
    return user as AppUser; 
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function login(email: string, password: string): Promise<AppUser> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const name = userDoc.exists() ? userDoc.data()?.name : user.displayName;

    console.log('Usuário logado:', name);
    
    return { ...user, displayName: name } as AppUser; 
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// LOGOUT (opcional)
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