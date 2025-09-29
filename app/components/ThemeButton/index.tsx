import { TouchableOpacity } from "react-native";
import { ThemeButtonProps } from "./themeButton.types";
import { Moon, Sun } from "lucide-react-native";
import { useTheme } from "@/app/theme/ThemeContext";
import { themeButtonStyles } from "./themeButton.styles";
import { darkColors, lightColors } from "@/app/theme/colors";

export const ThemeButton = ({ isDark, toggleTheme }: ThemeButtonProps) => {
  const { colors } = useTheme();
  const styles = themeButtonStyles(colors);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDark
            ? darkColors.backgroundSecondary
            : lightColors.backgroundSecondary,
        },
      ]}
      onPress={toggleTheme}
    >
      {isDark ? <Moon color={colors.white} /> : <Sun color={colors.black}/>}
    </TouchableOpacity>
  );
};
