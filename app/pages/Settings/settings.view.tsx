import { OptionsCard } from "@/app/components/OptionsCard"
import { useTheme } from "@/app/theme/ThemeContext"
import { ChevronLeft } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"
import { settingsStyles } from "./settings.styles"
import { router } from "expo-router"

export const SettingsView = () => {
    const {colors} = useTheme();
    const styles = settingsStyles(colors);

    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => router.push("/Home")}>
                    <ChevronLeft color={colors.textColor}/>
                </TouchableOpacity>
                <Text style={styles.text}>
                    Olá Joana!
                </Text>
                <View></View>
            </View>
            <OptionsCard  type="theme"/>
            <OptionsCard  type="default" title="Alterar senha" onPress={() => router.push('/Password')}/>
            <OptionsCard  type="default" title="Excluir conta"/>
            <OptionsCard  type="default" title="Sair"/>
        </View>
    )
}