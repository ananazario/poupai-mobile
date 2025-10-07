import { useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

import { updatePasswordInFirebase } from "@/app/services/auth/auth.service";

export function passwordModel() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleNewPassword = (value: string) => setNewPassword(value);
    const handleConfirmPassword = (value: string) => setConfirmPassword(value);

    async function handleChangePassword() {
        if (newPassword.length < 6) {
            Alert.alert("Erro", "A nova senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        setIsLoading(true);

        try {
            await updatePasswordInFirebase(newPassword); 

            Alert.alert("Sucesso", "Sua senha foi alterada com sucesso!");
            router.back(); 
            
        } catch (error: any) {
            console.error("Erro ao alterar senha:", error);
            
            let message = "Ocorreu um erro ao tentar alterar a senha. Tente novamente.";
            
            if (error.message.includes('auth/requires-recent-login')) {
                message = "Por motivos de segurança, você precisa fazer login novamente para alterar sua senha.";
            }

            Alert.alert("Erro", message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        newPassword,
        handleNewPassword,
        confirmPassword,
        handleConfirmPassword,
        handleChangePassword,
        isLoading,
    };
}