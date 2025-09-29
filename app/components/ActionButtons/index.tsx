import { Text, TouchableOpacity, View } from "react-native";
import { ActionButtonsProps } from "./button.types";
import { useTheme } from "@/app/theme/ThemeContext";
import { actionButtonsStyle } from "./button.styles";
import { ArrowDown, ArrowUp, History, Repeat } from "lucide-react-native";


export const ActionButtons = ({type, title,  onPress}:ActionButtonsProps) => {

    const {colors} = useTheme();
    const styles = actionButtonsStyle(colors);

    const iconMap = {
        receitas: ArrowUp,
        despesas: ArrowDown,
        transferencias: Repeat,
        extrato: History
    }

    const Icon = iconMap[type]

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerIcon} onPress={onPress}>
                <Icon color={colors.textColor}/>
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}