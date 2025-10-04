import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebaseConfig"; 
import { Alert } from "react-native";
import { ImageModalProps } from "./imageModal.types";

export const useImageModalModel = (id: string) => {
  const [state, setState] = useState<ImageModalProps>({
    imageUri: null,
    progress: 0,
    isUploading: false,
    modalVisible: false,
  });

  const setModalVisible = (visible: boolean) =>
    setState((prev) => ({ ...prev, modalVisible: visible }));

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "Você precisa permitir o acesso à galeria!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setState((prev) => ({ ...prev, imageUri: result.assets[0].uri }));
    }
  };

  const uploadImage = async () => {
    if (!state.imageUri) return;

    setState((prev) => ({ ...prev, isUploading: true, progress: 0 }));

    try {
      const response = await fetch(state.imageUri);
      const blob = await response.blob();

      const filename = `image-${id}-${Date.now()}.jpg`;
      const storageRef = ref(storage, `images/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const currentProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setState((prev) => ({ ...prev, progress: currentProgress }));
        },
        (error) => {
          setState((prev) => ({ ...prev, isUploading: false }));
          console.error("Erro no upload: ", error);
          Alert.alert("Erro", "Ocorreu um erro ao enviar a imagem.");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            Alert.alert("Sucesso!", "Imagem enviada.");
            console.log("Arquivo disponível em:", downloadURL);

            setState({
              imageUri: downloadURL,
              progress: 0,
              isUploading: false,
              modalVisible: false,
            });
          });
        }
      );
    } catch (err) {
      console.error(err);
      setState((prev) => ({ ...prev, isUploading: false }));
      Alert.alert("Erro", "Falha no upload da imagem.");
    }
  };

  return {
    state,
    setModalVisible,
    pickImage,
    uploadImage,
  };
};
