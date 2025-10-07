import { OptionsCard } from "@/app/components/OptionsCard"
import { useTheme } from "@/app/theme/ThemeContext"
import { ChevronLeft } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"
import { settingsStyles } from "./settings.styles"
import { router } from "expo-router"
import { settingsModel } from "./settings.model"
import { useAuth } from "@/app/context/AuthContext"

export const SettingsView = () => {
    const {colors} = useTheme();
    const styles = settingsStyles(colors);

        const { handleLogout } = settingsModel(); 

        const { user } = useAuth();
    const userName = user?.displayName || 'Usuário';


    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => router.push("/Home")}>
                    <ChevronLeft color={colors.textColor}/>
                </TouchableOpacity>
                <Text style={styles.text}>
                    Olá {userName}!
                </Text>
                <View></View>
            </View>
            <OptionsCard  type="theme"/>
            <OptionsCard  type="default" title="Alterar senha" onPress={() => router.push('/Password')}/>
            <OptionsCard  type="default" title="Excluir conta"/>
            <OptionsCard  type="default" title="Sair" onPress={handleLogout}/>
        </View>
    )
}