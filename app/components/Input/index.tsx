import {
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { InputProps } from "./input.types";
import { useTheme } from "@/app/theme/ThemeContext";
import { inputStyles } from "./input.styles";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export const Input = ({
  type,
  label,
  placeholder,
  onChangeText,
  value,
  style,
}: InputProps) => {
  const [showPassord, setShowPasord] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );

  const isEmail = type === "email";
  const isNumber = type === "number";
  const isPassord = type === "password";
  const isDate = type === "date";

  const { colors } = useTheme();
  const styles = inputStyles(colors);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR").format(date);
  };

  const handleDateChange = (_: DateTimePickerEvent, selected?: Date) => {
    if (Platform.OS === "android") setShowDatePicker(false);
    if (selected) {
      setDate(selected);
      onChangeText?.(selected.toISOString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {isDate ? (
          <Pressable onPress={() => setShowDatePicker(true)}>
            <Text
              numberOfLines={1}
              style={[styles.input, { color: colors.textColor }]}
            >
              {date ? formatDate(date) : placeholder}
            </Text>
          </Pressable>
        ) : (
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
        )}

        {isPassord && (
          <TouchableOpacity onPress={() => setShowPasord((prev) => !prev)}>
            {showPassord ? (
              <EyeOff size={20} color={colors.textColor} />
            ) : (
              <Eye size={20} color={colors.textColor} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {showDatePicker && Platform.OS === "ios" && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={showDatePicker}
          onRequestClose={() => setShowDatePicker(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="spinner"
                locale="pt-BR"
                onChange={handleDateChange}
                textColor={colors.textColor}
              />
              <TouchableOpacity style={styles.doneButton} onPress={() => setShowDatePicker(false)}>
                <Text style={{ color: colors.textColor }}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {showDatePicker && Platform.OS === "android" && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          locale="pt-BR"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};
