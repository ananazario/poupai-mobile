import { atualizarTransacao } from "@/app/models/transaction.model"; // Verifique o caminho!
import { useTheme } from "@/app/theme/ThemeContext";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { SquarePen, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Button";
import { DropdownSelect } from "../../Dropdown";
import { Input } from "../../Input";
import { editModalStyles } from "./editModal.styles";
import { EditModalProps } from "./editModal.types";

export const EditModal = ({ transaction }: EditModalProps) => {
  const { colors } = useTheme();
  const styles = editModalStyles(colors);

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // --- MUDANÇA PRINCIPAL: Estados são inicializados com os dados da transação ---
  const [banco, setBanco] = useState(transaction.banco);
  const [categoria, setCategoria] = useState(transaction.categoria);
  const [valor, setValor] = useState(String(transaction.valor));
  const [data, setData] = useState<Date | null>(transaction.data);

  // Efeito para resetar os estados se a transação mudar (boa prática)
  useEffect(() => {
    if (transaction) {
      setBanco(transaction.banco);
      setCategoria(transaction.categoria);
      setValor(String(transaction.valor));
      setData(transaction.data);
    }
  }, [transaction]);


  const title = transaction.tipo === "receitas" ? "Editar Receita" : "Editar Despesa";
  const isIncome = transaction.tipo === "receitas";

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
  
  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  const handleUpdate = async () => {
    if (!banco || !categoria || !valor || !data) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    setIsLoading(true);
    try {
      const dadosAtualizados = {
        banco,
        categoria,
        valor: parseFloat(valor.replace(',', '.')),
        data,
      };
      await atualizarTransacao(transaction.id, dadosAtualizados);
      Alert.alert("Sucesso", "Transação atualizada!");
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a transação.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <SquarePen color={colors.textColor} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor} />
              </TouchableOpacity>
            </View>

            {/* Formulário pré-preenchido */}
            <View>
              <DropdownSelect
                label="Banco"
                data={dropdownBank}
                placeholder="Selecione um banco"
                value={banco}
                onSelect={setBanco}
              />
              <DropdownSelect
                label="Categoria"
                data={isIncome ? dropdownIncome : dropdownExpense}
                placeholder="Selecione a categoria"
                value={categoria}
                onSelect={setCategoria}
              />
            </View>

            <View style={styles.containerInput}>
              <View style={styles.containerFlex}>
                <View style={styles.input}>
                  <Input 
                    label="Valor" 
                    type="number" 
                    value={valor}
                    onChangeText={setValor}
                  />
                </View>
                <View style={styles.input}>
                  <Input 
                    label="Data" 
                    type="date" 
                    value={data}
                    onDateChange={handleDateChange}
                  />
                </View>
              </View>
              <View style={styles.containerButton}>
                <View style={styles.button}>
                  <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
                </View>
                <View style={styles.button}>
                  <Button 
                    title={isLoading ? "Salvando..." : "Salvar Edição"} 
                    color="blue" 
                    onPress={handleUpdate}
                    disabled={isLoading}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};