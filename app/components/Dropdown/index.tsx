import { useTheme } from "@/app/theme/ThemeContext";
import { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { dropdownStyles } from "./dropdown.styles";
import { DropdownSelectProps } from "./dropdown.types";


export const DropdownSelect = ({
  label,
  data,
  placeholder,
  onSelect,
  value,
}: DropdownSelectProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const { colors } = useTheme();
  const styles = dropdownStyles(colors);

  

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.textColor }]}>
          {label}
        </Text>
      )}
      <Dropdown
        style={[
          styles.dropdown,
          { borderColor: isFocus ? colors.textColorBlue : colors.border },
        ]}
        placeholderStyle={{ color: colors.textColor , flexWrap: 'nowrap',}}
        selectedTextStyle={{ color: colors.textColor }}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onSelect(item.value);
          setIsFocus(false);
        }}
        renderItem={(item, selected) => (
          <View
            style={{
              padding: 12,
              backgroundColor: selected
                ? colors.backgroundSecondary
                : colors.background,
            }}
          >
            <Text
              style={{
                color: selected ? colors.textColorBlue : colors.textColor,
                fontWeight: selected ? "bold" : "normal", 
              }}
            >
              {item.label}
            </Text>
          </View>
        )}
      />
    </View>
  );
};