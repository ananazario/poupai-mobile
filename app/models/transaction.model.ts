// /models/transaction.model.ts

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig'; // Verifique se o caminho está correto!

// Interface completa, incluindo o 'id' que é necessário para a listagem e deleção
export interface Transacao {
  id: string;
  valor: number;
  tipo: 'receitas' | 'despesas';
  banco: string;
  categoria: string;
  data: Date;
  userId: string;
}

/**
 * Salva uma nova transação no Firestore.
 */
export const salvarNovaTransacao = async (
  transacaoData: Omit<Transacao, 'userId' | 'id'> // Não precisamos passar id ou userId
) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('Usuário não autenticado.');
  }

  try {
    const docRef = await addDoc(collection(db, 'transacoes'), {
      ...transacaoData,
      userId: user.uid,
      criadoEm: serverTimestamp(),
    });
    console.log('Transação salva com o ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Erro ao salvar a transação: ', error);
    throw error;
  }
};

/**
 * Cria um "ouvinte" em tempo real para as transações do usuário.
 */
export const escutarTransacoes = (
  callback: (transacoes: Transacao[]) => void,
  filter?: 'receitas' | 'despesas'
) => {
  const user = auth.currentUser;
  if (!user) {
    console.error('Usuário não autenticado para buscar transações.');
    return () => {}; // Retorna uma função de unsubscribe vazia
  }

  const transacoesCollection = collection(db, 'transacoes');
  let q = query(
    transacoesCollection,
    where('userId', '==', user.uid),
    orderBy('data', 'desc')
  );

  if (filter) {
    q = query(q, where('tipo', '==', filter));
  }

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const transacoesData: Transacao[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      transacoesData.push({
        id: doc.id,
        ...data,
        data: (data.data as Timestamp).toDate(),
      } as Transacao);
    });
    callback(transacoesData);
  });

  return unsubscribe; // Retorna a função para parar de "ouvir"
};

/**
 * Deleta uma transação do Firestore com base no seu ID.
 */
export const deletarTransacao = async (idDaTransacao: string) => {
  if (!idDaTransacao) {
    throw new Error('ID da transação não fornecido.');
  }

  try {
    const transacaoDocRef = doc(db, 'transacoes', idDaTransacao);
    await deleteDoc(transacaoDocRef);
    console.log('Transação deletada com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar transação: ', error);
    throw error;
  }
};


export const atualizarTransacao = async (idDaTransacao: string, dadosParaAtualizar: Partial<Transacao>) => {
  if (!idDaTransacao) {
    throw new Error("ID da transação não fornecido para atualização.");
  }

  // Cria uma referência para o documento específico que queremos editar
  const transacaoDocRef = doc(db, 'transacoes', idDaTransacao);

  try {
    // Atualiza o documento com os novos dados
    await updateDoc(transacaoDocRef, dadosParaAtualizar);
    console.log("Transação atualizada com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar transação: ", error);
    throw error;
  }
};