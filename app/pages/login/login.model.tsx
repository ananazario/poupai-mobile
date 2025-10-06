import { login } from "@/app/services/auth/auth.service";
import { useState } from "react";
import { Linking } from "react-native";

export function loginModel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isChecked, setChecked] = useState(false);

    const handleEmail = (value: string) => setEmail(value);
    const handlePassword = (value: string) => setPassword(value);

    async function handleLogin() {
        try {
          await login(email, password);
          Linking.openURL('/Home');
        } catch (err: any) {
        }
      }

    return{
        isChecked,
        setChecked,
        email,
        handleEmail,
        password,
        handlePassword,
        handleLogin
    }
}