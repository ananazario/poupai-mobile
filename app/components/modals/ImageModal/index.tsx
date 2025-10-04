import { useTheme } from "@/app/theme/ThemeContext";
import { Image as LucideImage, X } from "lucide-react-native";
import { Modal, TouchableOpacity, View, Image, Text } from "react-native";
import { Button } from "../../Button";
import { imageModalStyles } from "./imageModal.styles";
import { useImageModalModel } from "./imageModal.model";

interface Props {
  id: string;
}

export const ImageModal = ({ id }: Props) => {
  const { colors } = useTheme();
  const styles = imageModalStyles(colors);
  const { state, setModalVisible, pickImage, uploadImage } = useImageModalModel(id);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <LucideImage color={colors.textColor} />
      </TouchableOpacity>

      <Modal
        visible={state.modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.nav}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color={colors.textColor} />
              </TouchableOpacity>
            </View>

            {state.imageUri ? (
              <Image
                source={{ uri: state.imageUri }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              />
            ) : (
              <View
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 10,
                  backgroundColor: colors.background,
                  marginBottom: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LucideImage color={colors.textColor} size={48} />
              </View>
            )}

            <Button title="Escolher Imagem" color="purple" onPress={pickImage} />


            <View style={styles.containerButton}>
              <View style={styles.button}>
                <Button
                  title="Cancelar"
                  color="red"
                  onPress={() => {
                      setModalVisible(false);
                    }}
                    />
              </View>
              <View style={styles.button}>
                <Button
                  title={state.isUploading ? "Enviando..." : "Confirmar"}
                  color="blue"
                  onPress={uploadImage}
                  disabled={!state.imageUri || state.isUploading}
                  />
              </View>
            </View>
                  {state.progress > 0 && (
                    <Text style={{ marginTop: 10, color: colors.textColor }}>
                      Progresso: {state.progress.toFixed(2)}%
                    </Text>
                  )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
