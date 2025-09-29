import { Text, TouchableOpacity, View } from "react-native";
import { OptionsCardProps } from "./optionsCard.types";
import { ChevronRight } from "lucide-react-native";
import { ThemeButton } from "../ThemeButton";
import { useTheme } from "@/app/theme/ThemeContext";
import { optionsCardStyles } from "./optionsCard.styles";

export const OptionsCard = ({ type, title, onPress }: OptionsCardProps) => {
  const isDefault = type === "default";

  const {colors, toggleTheme, isDark} = useTheme();
  const text = isDark? 'light' : 'dark';

  const styles = optionsCardStyles(colors);

  return (
    <View>
      {isDefault ? (
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          <TouchableOpacity>
            <ChevronRight color={colors.textColor}/>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
            <Text style={styles.text}>Mudar para {text} mode</Text>
          <ThemeButton toggleTheme={toggleTheme} isDark={isDark} />
        </View>
      )}
    </View>
  );
};
