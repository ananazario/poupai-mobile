import { useTheme } from "@/app/theme/ThemeContext";
import { Text, TouchableOpacity } from "react-native";
import { chipStyle } from "./chip.styles";
import { ChipType } from "./chip.types";

interface ChipProps {
  data: ChipType;
  onPress: (id: string) => void;
}

export const Chip = ({ data, onPress }: ChipProps) => {
  const { colors } = useTheme();
  const styles = chipStyle(colors);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        data.selected ? styles.selected : styles.unselected,
      ]}
      onPress={() => onPress(data.id)}
    >
      <Text style={data.selected ? styles.textSelected : styles.textUnselected}>
        {data.label}
      </Text>
    </TouchableOpacity>
  );
};
