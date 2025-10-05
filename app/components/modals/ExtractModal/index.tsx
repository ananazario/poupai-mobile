import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { RelativePathString, useRouter } from "expo-router"; 
import { X } from "lucide-react-native";
import { useTheme } from "@/app/theme/ThemeContext";
import { DropdownSelect } from "../../Dropdown";
import { createModalStyles } from "../../CreateModal/createModal.styles";

type NavigationModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const NavigationModal = ({ visible, onClose }: NavigationModalProps) => {
  const { colors } = useTheme();
  const styles = createModalStyles(colors);
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>("");

  const options = [
  { label: "Income", value: "receitas" },
  { label: "Expense", value: "despesas" },
  { label: "Transactions", value: "transferencias" },
];

type RouteKey = typeof options[number]["value"];

type Route = "/Income" | "/Expense" | "/Transactions";

const routeMap: Record<RouteKey, Route> = {
  receitas: "/Income",
  despesas: "/Expense",
  transferencias: "/Transactions",
};

const handleSelect = (value: RouteKey) => {
  const route = routeMap[value];
  if (route) {
    router.push(route as RelativePathString); 
  }
};

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.nav}>
            <Text style={styles.title}>Escolha uma página</Text>
            <TouchableOpacity onPress={onClose}>
              <X color={colors.textColor} />
            </TouchableOpacity>
          </View>

          <DropdownSelect
            label="Ir para"
            data={options}
            placeholder="Selecione uma página"
            value={selectedValue}
            onSelect={handleSelect} 
          />
        </View>
      </View>
    </Modal>
  );
};
