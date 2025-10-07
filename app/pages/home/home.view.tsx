


import { ActionButtons } from '@/app/components/ActionButtons';
import { CardTransactions } from '@/app/components/CardTransactions';
import { Transacao } from '@/app/models/transaction.model';
import { useTheme } from '@/app/theme/ThemeContext';
import { Settings } from 'lucide-react-native'; // Ícone de exemplo
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './home.styles';

interface HomeViewProps {
  transactions: Transacao[];
  loading: boolean;
}
export const HomeView = ({ transactions = [], loading }: HomeViewProps) => { 

  const { colors } = useTheme();
  const styles = homeStyles(colors);

  // Função para renderizar o cabeçalho da sua tela
  const renderHeader = () => (
    <View style={styles.account}>
      <View>
        <Text style={styles.name}>Olá Joana!</Text>
        <Text style={styles.text}>Saldo total em conta</Text>
        <Text style={styles.amount}>R$ 0,00</Text>
      </View>
      <TouchableOpacity style={styles.config}>
        <Settings color={colors.white} />
      </TouchableOpacity>
    </View>
  );

  // Função para renderizar o corpo da tela (loading, vazio ou a lista)
  const renderBody = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={colors.blue500} />
        </View>
      );
    }

    if (transactions.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>Nenhuma transação cadastrada.</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardTransactions transaction={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      
{renderHeader()}
{/* Descomente e adicione seus botões aqui */}
  <View style={styles.containerActions}>
       <ActionButtons title="Receitas" type="receitas"></ActionButtons>
        <ActionButtons title="Despesas" type="despesas"></ActionButtons>
      <ActionButtons
       title="Transfêrencia"
       type="transferencias"
       ></ActionButtons>
       <ActionButtons title="Extrato" type="extrato"></ActionButtons>
      </View>

<View style={styles.listContainer}>
  {renderBody()}
</View>

      <View style={styles.listContainer}>
        {renderBody()}
      </View>
    </View>
  );
};
