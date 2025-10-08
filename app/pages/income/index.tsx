import React, { useEffect, useState } from 'react';

import { escutarTransacoes, Transacao } from '@/app/models/transaction.model';
// <-- MUDANÇA 1: Importar o hook renomeado
import { useIncomeModel } from './income.model';
import { IncomeView } from './income.view';

// Este é o componente que o Expo Router vai renderizar como a tela de "Receitas"
const IncomePage = () => {
  // Estados para guardar a lista de transações e o status de carregamento
  const [receitas, setReceitas] = useState<Transacao[]>([]);
  const [loading, setLoading] = useState(true);

  // <-- MUDANÇA 2: Chamar a função como um hook
  const { chips, toggleChip } = useIncomeModel();

  // Efeito que busca os dados do Firebase quando a tela é montada
 
useEffect(() => {
  const unsubscribe = escutarTransacoes(
    (novasTransacoes) => {
      setReceitas(novasTransacoes);
      setLoading(false);
    },
    { filter: 'receitas' } // <-- O "plugue" correto (passando um objeto)
  );
  return () => unsubscribe();
}, []);

  // O controlador renderiza a View, passando os dados e o status de carregamento para ela
  return (
    <IncomeView
      transactions={receitas}
      loading={loading}
      chips={chips}
      toggleChip={toggleChip}
    />
  );
};

export default IncomePage;