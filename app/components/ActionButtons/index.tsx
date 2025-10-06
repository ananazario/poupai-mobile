import { useTheme } from "@/app/theme/ThemeContext";
import { ArrowDown, ArrowUp, History, Repeat } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CreateModal } from "../CreateModal";
import { actionButtonsStyle } from "./button.styles";
import { ActionButtonsProps } from "./button.types";

export const ActionButtons = ({ type, title }: ActionButtonsProps) => {
  const { colors } = useTheme();
  const styles = actionButtonsStyle(colors);
  const [modalVisible, setModalVisible] = useState(false);

  const iconMap = {
    receitas: ArrowUp,
    despesas: ArrowDown,
    transferencias: Repeat,
    extrato: History,
  };

  const Icon = iconMap[type];
const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerIcon} onPress={openModal}>
        <Icon color={colors.textColor} />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      {modalVisible && type === "extrato" && (
        <CreateModal type='receitas' visible={modalVisible} onClose={closeModal} />
      )}

      {modalVisible && type !== "extrato" && (
        <CreateModal
          type={type}
          visible={modalVisible}
          onClose={closeModal}
        />
      )}
    </View>
  );
};
