import { useTheme } from '@/app/theme/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import {
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { inputStyles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({
  type = 'text',
  label,
  value,
  onDateChange,
  onChangeText,
  ...rest // Captura placeholder, keyboardType, etc.
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isPasswordType = type === 'password' || type === 'confirmPassword';
  const isDate = type === 'date';

  const { colors } = useTheme();
  const styles = inputStyles(colors);

  const formatDate = (dateToFormat: Date) => {
    if (!dateToFormat || isNaN(dateToFormat.getTime())) return '';
    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
      dateToFormat
    );
  };

  // O valor para o picker precisa ser um objeto Date.
  const datePickerValue = value instanceof Date ? value : new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {isDate ? (
          <>
            <Pressable
              style={styles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text
                style={[
                  styles.input,
                  {
                    color: value ? colors.textColor : colors.textColor,
                    paddingVertical: 0,
                  },
                ]}
              >
                {value ? formatDate(value as Date) : rest.placeholder}
              </Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={datePickerValue}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  if (Platform.OS === 'android') {
                    setShowDatePicker(false);
                  }
                  // Chama o onDateChange diretamente, passando o evento e a data
                  onDateChange?.(event, date);
                }}
              />
            )}
          </>
        ) : (
          <TextInput
            onChangeText={onChangeText}
            value={value as string}
            style={[styles.input, { color: colors.textColor }]}
            placeholderTextColor={colors.textColor}
            secureTextEntry={isPasswordType && !showPassword}
            {...rest} // Passa todas as outras props
          />
        )}

        {isPasswordType && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <EyeOff size={20} color={colors.textColor} />
            ) : (
              <Eye size={20} color={colors.textColor} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};