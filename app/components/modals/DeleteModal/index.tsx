import { useTheme } from "@/app/theme/ThemeContext";
import { deleteModalStyles } from "./deleteModal.styles";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Trash, X } from "lucide-react-native";
import { Button } from "../../Button";

export const DeleteModal = () => {
  const { colors } = useTheme();
  const styles = deleteModalStyles(colors);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Trash color={colors.textColor} />
      </TouchableOpacity>

      <Modal
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor} />
              </TouchableOpacity>
            </View>
            <View style={styles.containerContent}>
              <Text style={styles.text}>
                Tem certeza que deseja excluir a transação?
              </Text>
              <View style={styles.containerButton}>
                <View style={styles.button}>
                  <Button
                    title="Não"
                    color="red"
                    onPress={() => setModalVisible(false)}
                  />
                </View>
                <View style={styles.button}>
                  <Button title="Sim" color="blue" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
