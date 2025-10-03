// Salve este código como app/ImageUploader.tsx

import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

// ATENÇÃO: Verifique se o caminho para seu firebaseConfig está correto!
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const ImageUploader: React.FC = () => {
  // O estado pode ser uma string com a URI ou nulo
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const pickImage = async () => {
    // Pedir permissão para acessar a galeria de mídia
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
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
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) {
      return;
    }

    setIsUploading(true);
    setProgress(0);

    // Converte a URI da imagem local para um blob que o Firebase pode usar
    const response = await fetch(imageUri);
    const blob = await response.blob();
    
    // Cria um nome único para o arquivo usando a data atual
    const filename = `image-${Date.now()}.jpg`;
    
    // Cria a referência no Firebase Storage
    const storageRef = ref(storage, `images/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const currentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(currentProgress);
      },
      (error) => {
        setIsUploading(false);
        console.error("Erro no upload: ", error);
        Alert.alert("Erro", "Ocorreu um erro ao fazer o upload da imagem.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          Alert.alert("Sucesso!", "Sua imagem foi enviada.");
          console.log('Arquivo disponível em', downloadURL);
          setIsUploading(false);
          setImageUri(null);
          setProgress(0);
        });
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload de Imagem para o Storage</Text>
      
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      
      <Button title="Escolher imagem da galeria" onPress={pickImage} />
      
      {progress > 0 && <Text style={styles.progressText}>Progresso: {progress.toFixed(2)}%</Text>}

      <View style={styles.uploadButton}>
        <Button 
          title={isUploading ? "Enviando..." : "Fazer Upload"} 
          onPress={uploadImage} 
          disabled={!imageUri || isUploading} 
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
  },
  uploadButton: {
    marginTop: 20,
    width: '60%',
  }
});

export default ImageUploader;