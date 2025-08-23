import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputProps } from "./input.types";
import { useTheme } from "@/app/theme/ThemeContext";
import { inputStyles } from "./input.styles";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";

export const Input = ({
  type,
  label,
  placeholder,
  onChangeText,
  value,
  style,
}: InputProps) => {
  const [showPassord, setShowPasord] = useState(false);

  const isEmail = type === "email";
  const isNumber = type === "number";
  const isPassord = type === "password";

  const { colors } = useTheme();
  const styles = inputStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textColor}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isPassord && !showPassord}
          keyboardType={
            isEmail ? "email-address" : isNumber ? "numeric" : "default"
          }
          autoCapitalize={isEmail ? "none" : "sentences"}
          style={[styles.input, style]}
        />

        {isPassord && 
        (<TouchableOpacity onPress={() => setShowPasord((prev) => !prev)}>
            {showPassord ? (
                <EyeOff/>
            ) : (
                <Eye/>
            )}
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
