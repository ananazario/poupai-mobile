import { deletarTransacao } from "@/app/models/transaction.model"; // Verifique se o caminho do seu model está correto
import { useTheme } from "@/app/theme/ThemeContext";
import { Trash, X } from "lucide-react-native";
import { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Button";
import { deleteModalStyles } from "./deleteModal.styles";
import { DeleteModalProps } from "./deleteModal.types";

export const DeleteModal = ({ transactionId }: DeleteModalProps) => {
  const { colors } = useTheme();
  const styles = deleteModalStyles(colors);

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Função que é chamada ao confirmar a deleção
  const handleConfirmDelete = async () => {
    setIsLoading(true);
    try {
      await deletarTransacao(transactionId);
      Alert.alert("Sucesso", "A transação foi excluída.");
      setModalVisible(false); // Fecha o modal após o sucesso
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a transação.");
    } finally {
      setIsLoading(false); // Garante que o estado de loading termine
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Trash color={colors.redNormal} />
      </TouchableOpacity>

      <Modal
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
             
              <Text style={styles.text}>Excluir Transação</Text> 
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor} />
              </TouchableOpacity>
            </View>
            <View style={styles.containerContent}>
              <Text style={styles.text}>
                Tem certeza que deseja excluir esta transação? Esta ação não pode ser desfeita.
              </Text>
              <View style={styles.containerButton}>
                <View style={styles.button}>
                  <Button
                    title="Não"
                    color="red"
                    onPress={() => setModalVisible(false)}
                    disabled={isLoading}
                  />
                </View>
                <View style={styles.button}>
                  <Button 
                    title={isLoading ? "Excluindo..." : "Sim"} 
                    color="blue" 
                    onPress={handleConfirmDelete}
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