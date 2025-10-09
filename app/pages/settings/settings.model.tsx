import { logout } from "@/app/services/auth/auth.service";
import { useAuth } from "@/app/context/AuthContext";
import { router } from "expo-router";

export function settingsModel() {
    const { setUser } = useAuth(); 
    async function handleLogout() {
        try {
            await logout(); 
            setUser(null); 
            
            router.replace('/'); 
            
            console.log("Logout bem-sucedido e redirecionado.");
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    }

    return {
        handleLogout,
    };
}