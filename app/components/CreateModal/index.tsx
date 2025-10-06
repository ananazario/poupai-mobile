import { useTheme } from "@/app/theme/ThemeContext";
import { ArrowDown, ArrowUp, History, Repeat, SquarePen, X } from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { DropdownSelect } from "../Dropdown";
import { Input } from "../Input";
import { Button } from "../Button";
import { CreateModalProps } from "./createModal.types";
import { createModalStyles } from "./createModal.styles";
import { useState } from "react";

export const CreateModal = ({ type, where, visible, onClose }: CreateModalProps) => {
  const { colors } = useTheme();
  const styles = createModalStyles(colors);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const title =
    type === "receitas"
      ? "Receita"
      : type === "despesas"
      ? "Despesas"
      : "Transferências";

  const color =
    where === "button"
      ? 'transparent' : colors.textColor

  const isTransfer = type === "transferencias";
  const isIncome = type === "receitas";

  const dropdownBank = [
    { label: "Nubank", value: "nu" },
    { label: "Itau", value: "itau" },
  ];
  const dropdownIncome = [
    { label: "Pix", value: "pix" },
    { label: "Salario", value: "salary" },
  ];
  const dropdownExpense = [
    { label: "Alimentação", value: "food" },
    { label: "Saude", value: "health" },
  ];

  const iconMap = {
        receitas: ArrowUp,
        despesas: ArrowDown,
        transferencias: Repeat,
        extrato: History
    }

    const Icon = iconMap[type]

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.nav}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <X color={colors.textColor} />
            </TouchableOpacity>
          </View>

          {isTransfer ? (
            <View>
              <DropdownSelect
                label="Saiu de"
                data={dropdownBank}
                placeholder="Selecione um banco"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
              <DropdownSelect
                label="Para"
                data={dropdownBank}
                placeholder="Selecione um banco"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
            </View>
          ) : isIncome ? (
            <View>
              <DropdownSelect
                label="Banco"
                data={dropdownBank}
                placeholder="Selecione um banco"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
              <DropdownSelect
                label="Categoria"
                data={dropdownIncome}
                placeholder="Selecione a categoria"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
            </View>
          ) : (
            <View>
              <DropdownSelect
                label="Banco"
                data={dropdownBank}
                placeholder="Selecione um banco"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
              <DropdownSelect
                label="Categoria"
                data={dropdownExpense}
                placeholder="Selecione a categoria"
                value={selectedValue}
                onSelect={(value) => setSelectedValue(value)}
              />
            </View>
          )}

          <View style={styles.containerInput}>
            <View style={styles.containerFlex}>
              <View style={styles.input}>
                <Input label="Valor" type="number" placeholder="R$ 0,00" />
              </View>
              <View style={styles.input}>
                <Input label="Data" type="date" placeholder="dd/mm/aaaa" />
              </View>
            </View>
            <View style={styles.containerButton}>
              <View style={styles.button}>
                <Button title="Cancelar" color="red" onPress={onClose} />
              </View>
              <View style={styles.button}>
                <Button title="Criar" color="blue" onPress={onClose} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
