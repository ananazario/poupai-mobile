// /components/CardTransactions/cardTransactions.types.ts

// Importamos a interface Transacao que definimos no nosso model
import { Transacao } from '@/app/models/transaction.model'; // <-- Verifique se o caminho está correto

export interface CardTransactionsProps {
  // A única prop que o card precisa é o objeto de transação inteiro
  transaction: Transacao;
}