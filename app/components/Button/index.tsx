import { useTheme } from "@/app/theme/ThemeContext"
import { ButtonProps } from "./button.types"
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "./button.styles";

export const Button = ({title, onPress, color, href} : ButtonProps) => {
    const {colors} = useTheme();
    const styles = buttonStyles(colors);

    const backgroundColor = color === 'blue' ? colors.blue500 : color === 'yellow' ? colors.yellowNormal : color === 'red' ? colors.redNormal : colors.white

    const textColor = color === 'yellow' ?  colors.black : color === "white" ? colors.blue500 : colors.white;

    const handlePress = () => {
        if (href) {
            router.push(href);
        } else if (onPress) {
            onPress();
        }
    }

    return(
        <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={handlePress}>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    )
}