// /models/transaction.model.ts

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// <-- MUDANÇA: Importar 'db' e 'auth' diretamente do seu arquivo de configuração
import { auth, db } from '../../firebaseConfig'; // <-- Verifique se este caminho está correto!

// Define a estrutura de dados de uma transação
export interface Transacao {
  valor: number;
  // <-- MUDANÇA: Removido 'transferencias' para corresponder ao que o modal envia
  tipo: 'receitas' | 'despesas'; 
  banco: string;
  categoria: string;
  data: Date;
  userId: string;
}

// Função que salva a nova transação no Firestore
export const salvarNovaTransacao = async (
  transacaoData: Omit<Transacao, 'userId'>
) => {
  // <-- MUDANÇA: O usuário agora é pego diretamente do 'auth' importado
  const user = auth.currentUser; 
  if (!user) {
    // Se não houver usuário logado, retorna um erro
    throw new Error("Usuário não autenticado.");
  }

  try {
    // Acessa a coleção 'transacoes' e adiciona um novo documento
    const docRef = await addDoc(collection(db, 'transacoes'), {
      ...transacaoData,
      userId: user.uid, // Garante que a transação pertence ao usuário logado
      criadoEm: serverTimestamp(), // Adiciona um carimbo de data/hora do servidor
    });
    console.log("Transação salva com o ID: ", docRef.id);
    return docRef; // Retorna a referência do documento em caso de sucesso
  } catch (error) {
    console.error("Erro ao salvar a transação: ", error);
    throw error; // Lança o erro para ser tratado na tela
  }
};