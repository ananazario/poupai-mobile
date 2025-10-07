import React, { useEffect, useState } from 'react';

import { escutarTransacoes, Transacao } from '@/app/models/transaction.model';
import { HomeView } from './home.view';

const Home = () => {
  // Estados para guardar a lista de transações e o status de carregamento
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  
  const [loading, setLoading] = useState(true);

  // Efeito que busca os dados do Firebase quando a tela é montada
  useEffect(() => {
    // A função 'escutarTransacoes' vem do nosso model e fica "ouvindo" as mudanças
    const unsubscribe = escutarTransacoes((novasTransacoes) => {
      setTransacoes(novasTransacoes); // Atualiza a lista
      setLoading(false); // Indica que o carregamento inicial terminou
    });

    // Função de limpeza que é executada quando o usuário sai da tela
    return () => unsubscribe();
  }, []);

  // O controlador renderiza a View, passando os dados e o status de carregamento para ela
  return <HomeView transactions={transacoes} loading={loading} />;
};

export default Home;