import { useState } from "react";
import { ViewModalProps } from "./viewModal.types";
import { useTheme } from "@/app/theme/ThemeContext";
import { Modal, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Eye, X } from "lucide-react-native";
import { viewModalStyles } from "./viewModal.styles";

export const ViewModal = ({
  type,
  originBank,
  destinyBank,
  category,
  date,
  amount,
}: ViewModalProps) => {
  const { colors } = useTheme();
  const styles = viewModalStyles(colors);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Eye color={colors.textColor}/>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(false)}}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
              <Text style={styles.title}>Detalhes da Transação</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor}/>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.line}>
                {type !== "receitas" && <Text style={styles.textTitle}>Saiu de</Text>}
                {type !== "receitas" && <Text style={styles.text}>{originBank || "-"}</Text>}
              </View>
              <View style={styles.line}>
                {type !== "despesas" && <Text style={styles.textTitle}>Para</Text>}
                {type !== "despesas" && <Text style={styles.text}>{destinyBank || "-"}</Text>}
              </View>
              <View style={styles.line}>
                {type !== "transferencias" && <Text style={styles.textTitle}>Categoria</Text>}
                {type !== "transferencias" && <Text style={styles.text}>{category || "-"}</Text>}
              </View>
              <View style={styles.line}>
                <Text style={styles.textTitle}>Data</Text>
                <Text style={styles.text}>{date || '-'}</Text>
              </View> 
              <View style={styles.line}>
                <Text style={styles.textTitle} >Valor</Text>
                <Text style={styles.text}>R$ {amount}</Text>
              </View> 
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
