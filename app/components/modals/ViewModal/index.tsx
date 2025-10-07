import { useTheme } from "@/app/theme/ThemeContext";
import { Eye, X } from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { viewModalStyles } from "./viewModal.styles";
import { ViewModalProps } from "./viewModal.types";

export const ViewModal = ({ transaction }: ViewModalProps) => {
console.log('ViewModal recebeu:', transaction);

  // Verificação de segurança:
  if (!transaction) {
    return null; // Não renderiza o modal se não houver dados
  }

  const { colors } = useTheme();
  const styles = viewModalStyles(colors);
  
  const [modalVisible, setModalVisible] = useState(false);

  // Extrai os dados de dentro da prop 'transaction'
  const { tipo, banco, categoria, data, valor } = transaction;

  // Formata os dados para exibição
  const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  
  // Como 'transferencias' não está sendo tratado no tipo da transação,
  // vamos assumir que só temos receitas e despesas por enquanto.
  const isReceita = tipo === 'receitas';
  const isDespesa = tipo === 'despesas';

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Eye color={colors.textColor} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
              <Text style={styles.title}>Detalhes da Transação</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              
              {/* O campo 'banco' é exibido tanto para receitas quanto para despesas */}
              <View style={styles.line}>
                <Text style={styles.textTitle}>Banco</Text>
                <Text style={styles.text}>{banco || "-"}</Text>
              </View>

              <View style={styles.line}>
                <Text style={styles.textTitle}>Categoria</Text>
                <Text style={styles.text}>{categoria || "-"}</Text>
              </View>

              <View style={styles.line}>
                <Text style={styles.textTitle}>Data</Text>
                <Text style={styles.text}>{dataFormatada || "-"}</Text>
              </View>

              <View style={styles.line}>
                <Text style={styles.textTitle}>Valor</Text>
                <Text style={[styles.text, { color: isReceita ? colors.greenNormal : colors.redNormal }]}>
                  {valorFormatado}
                </Text>
              </View>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};