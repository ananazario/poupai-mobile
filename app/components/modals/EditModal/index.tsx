import { useTheme } from "@/app/theme/ThemeContext";
import { SquarePen, X } from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { editModalStyles } from "./editModal.styles";
import { EditModalProps } from "./editModal.types";

export const EditModal = ({type}: EditModalProps ) => {
    const {colors} = useTheme();
    const styles = editModalStyles(colors);

    const [modalVisible, setModalVisible] = useState(false);

    const title = type === 'receitas' ? 'Receita' : type === 'despesas' ? 'Despesas' : 'transferencias'

    

    return(
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
                <Button title="Cancelar" color="red"/>
                </View>
                <View style={styles.button}>
                <Button title="Editar" color="blue"/>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    )

}