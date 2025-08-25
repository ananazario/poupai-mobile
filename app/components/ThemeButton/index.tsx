import { darkColors, lightColors } from "@/app/theme/colors";
import { useTheme } from "@/app/theme/ThemeContext";
import { Moon, Sun } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { themeButtonStyles } from "./themeButton.styles";
import { ThemeButtonProps } from "./themeButton.types";

export const ThemeButton = ({ isDark, toggleTheme }: ThemeButtonProps) => {
  const { colors } = useTheme();
  const styles = themeButtonStyles(colors);

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.button,
        {
          backgroundColor: isDark
            ? darkColors.backgroundSecondary
            : lightColors.backgroundSecondary,
        },
      ]}
    >
      {isDark ? (
        <Moon color={colors.textColor} />
      ) : (
        <Sun color={colors.textColor} />
      )}
    </TouchableOpacity>
  );
};
