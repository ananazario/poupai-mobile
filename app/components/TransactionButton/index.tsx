import { useTheme } from "@/app/theme/ThemeContext";
import { Text, TouchableOpacity } from "react-native";
import { transactionsButtonStyles } from "./transactionsButton.styles";
import { TransactionsButtonProps } from "./transactionsButton.types";
import { CreateModal } from "../CreateModal";
import { usePathname } from "expo-router";
import { useState } from "react";

export const TransactionsButton = ({text}:TransactionsButtonProps) => {
  const { colors } = useTheme();
  const styles = transactionsButtonStyles(colors);
  const pathname = usePathname();

    const [modalVisible, setModalVisible] = useState(false);


  let type: "receitas" | "despesas" | "transferencias" = 'transferencias' 
  if (pathname.includes("Income")) type = "receitas";
  if (pathname.includes("Transactions")) type = "transferencias";
  if (pathname.includes("Expense")) type = "transferencias";

  return (
     <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>

      <CreateModal
        type={type}
        where="button"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};