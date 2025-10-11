import { useTheme } from '@/app/theme/ThemeContext';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react'; // Adicionado 'React' para JSX
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

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // Esconde o picker no Android após a seleção
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    // Chama a função do componente pai se uma data for selecionada
    if (selectedDate) {
      onDateChange?.(event, selectedDate);
    }
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
              onPress={() => {
                // --- CORREÇÃO AQUI: Só tenta abrir o picker se NÃO for web ---
                if (Platform.OS !== 'web') {
                  setShowDatePicker(true);
                } else {
                  alert('A seleção de data não é suportada na web.');
                }
              }}
            >
              <Text
                style={[
                  styles.input,
                  {
                    color: value ? colors.textColor : '#8e8e8e', // Cor para o placeholder
                    paddingVertical: 0,
                  },
                ]}
              >
                {value ? formatDate(value as Date) : rest.placeholder}
              </Text>
            </Pressable>
            {/* --- CORREÇÃO AQUI: Só renderiza o picker se NÃO for web --- */}
            {showDatePicker && Platform.OS !== 'web' && (
              <DateTimePicker
                value={datePickerValue}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </>
        ) : (
          <TextInput
            onChangeText={onChangeText}
            value={value as string}
            style={[styles.input, { color: colors.textColor }]}
            placeholderTextColor={'#8e8e8e'} // Cor para o placeholder
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