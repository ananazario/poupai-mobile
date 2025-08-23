import { TouchableOpacity } from "react-native"
import { ThemeButtonProps } from "./themeButton.types"
import { useTheme } from "@react-navigation/native"
import { Moon, Sun } from "lucide-react-native";

export const ThemeButton = ({ isDark, toggleTheme} : ThemeButtonProps) => {
    return(
        <TouchableOpacity onPress={toggleTheme}>
            {isDark ? <Moon/> : <Sun/>}
        </TouchableOpacity>
    )
}