import { useTheme } from '@/app/theme/ThemeContext';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { ArrowDown, ArrowUp, X } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import { salvarNovaTransacao } from '../../models/transaction.model'; // Verifique o caminho!
import { Button } from '../Button';
import { DropdownSelect } from '../Dropdown';
import { Input } from '../Input';
import { createModalStyles } from './createModal.styles';
import { CreateModalProps } from './createModal.types';

export const CreateModal = ({
  type,
  where,
  visible,
  onClose,
}: CreateModalProps) => {
  const { colors } = useTheme();
  const styles = createModalStyles(colors);

  const [banco, setBanco] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [data, setData] = useState<Date | null>(new Date()); // O estado agora é Date ou null
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const title = type === 'receitas' ? 'Receita' : 'Despesas';
  const isIncome = type === 'receitas';

  const dropdownBank = [
  
    { label: 'Nubank', value: 'nu' },
    { label: 'Itau', value: 'itau' },
  ];
  const dropdownIncome = [
    { label: 'Pix', value: 'pix' },
    { label: 'Salario', value: 'salary' },
  ];
  const dropdownExpense = [
    { label: 'Alimentação', value: 'food' },
    { label: 'Saude', value: 'health' },
  ];
  
  const Icon = isIncome ? ArrowUp : ArrowDown;

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  const handleCreateTransaction = async () => {
    if (!banco || !categoria || !valor || !data) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setIsLoading(true);
    try {
      const novaTransacao = {
        valor: parseFloat(valor.replace(',', '.')),
        data: data, // Usa o objeto Date diretamente
        banco: banco,
        categoria: categoria,
        tipo: type as 'receitas' | 'despesas',
      };

      await salvarNovaTransacao(novaTransacao);
      Alert.alert('Sucesso!', 'Sua transação foi salva.');
      
      // Limpa os campos e fecha o modal
      setBanco('');
      setCategoria('');
      setValor('');
      setData(new Date());
      onClose();

    } catch (error) {
      console.error("ERRO DETALHADO AO SALVAR:", error);
      Alert.alert('Erro', 'Não foi possível salvar a transação.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal visible={visible} transparent onRequestClose={onClose} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.nav}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <X color={colors.textColor} />
            </TouchableOpacity>
          </View>
          <View>
            <DropdownSelect
              label="Banco"
              data={dropdownBank}
              placeholder="Selecione um banco"
              value={banco}
              onSelect={setBanco}
            />
            <DropdownSelect
              label="Categoria"
              data={isIncome ? dropdownIncome : dropdownExpense}
              placeholder="Selecione a categoria"
              value={categoria}
              onSelect={setCategoria}
            />
          </View>
          <View style={styles.containerInput}>
            <View style={styles.containerFlex}>
              <View style={styles.input}>
                <Input
                  label="Valor"
                  type="number"
                  placeholder="R$ 0,00"
                  value={valor}
                  onChangeText={setValor}
                />
              </View>
              <View style={styles.input}>
                <Input
                  label="Data"
                  type="date"
                  placeholder="Selecione a data"
                  value={data}
                  onDateChange={handleDateChange}
                />
              </View>
            </View>
            <View style={styles.containerButton}>
              <View style={styles.button}>
                <Button title="Cancelar" color="red" onPress={onClose} />
              </View>
              <View style={styles.button}>
                <Button
                  title={isLoading ? 'Salvando...' : 'Criar'}
                  color="blue"
                  onPress={handleCreateTransaction}
                  disabled={isLoading}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};