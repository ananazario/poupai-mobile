import { signUp } from "@/app/services/auth/auth.service";
import { useState } from "react";
import { Linking } from "react-native";

export function signupModel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = (value: string) => setEmail(value)
    const handlePassword = (value: string) => setPassword(value);
   
    async function handleSignUp() {
       try {
         await signUp(email, password);
         Linking.openURL('/Login');
         setMessage('Usuário cadastrado com sucesso!');
       } catch (err: any) {
         setMessage(`Erro: ${err.message}`);
       }
     }
   
    return{
        email,
        handleEmail,
        password,
        handlePassword,
        handleSignUp
    }
}