// Salve este código como app/TesteFirebase.tsx

import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
// ATENÇÃO: Verifique se o caminho para seu firebaseConfig está correto!
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// (Boa prática em TypeScript) Definimos uma interface para o nosso objeto de dados
interface UsuarioTeste {
  nome: string;
  email: string;
  dataCriacao: Date; // O SDK do Firebase lida bem com o tipo Date do JS
}

const TesteFirebase: React.FC = () => {
  // Tipamos o estado para garantir que sempre será uma string
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const salvarDados = async () => {
    if (nome === '' || email === '') {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const novoUsuario: UsuarioTeste = {
        nome: nome,
        email: email,
        dataCriacao: new Date(),
      };
      
      // "usuarios_teste" será a coleção onde os dados serão salvos
      const docRef = await addDoc(collection(db, "usuarios_teste"), novoUsuario);

      console.log("Documento salvo com ID: ", docRef.id);
      Alert.alert("Sucesso!", "Dados salvos no Firebase!");
      setNome('');
      setEmail('');
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      Alert.alert("Erro", "Não foi possível salvar os dados. Verifique o console.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste de Conexão com Firebase (TSX)</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={nome}
        onChangeText={setNome} // onChangeText já passa uma string, então é seguro
      />
      <TextInput
        style={styles.input}
        placeholder="Digite um e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Salvar no Firestore" onPress={salvarDados} />
    </View>
  );
};

// O StyleSheet permanece o mesmo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      },
});

export default TesteFirebase;