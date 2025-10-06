// No seu arquivo input.types.ts

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { TextInputProps } from 'react-native';

// 1. Usamos Omit para criar uma base de props sem a propriedade 'value' original.
type BaseInputProps = Omit<TextInputProps, 'value'>;

// 2. Agora, nossa interface herda dessa base e adiciona a nossa própria 'value' customizada.
export interface InputProps extends BaseInputProps {
  label: string;
  type?: 'text' | 'email' | 'number' | 'date' | 'password' | 'confirmPassword';
  
  // Esta é a nossa propriedade 'value' que aceita múltiplos tipos, sem conflito.
  value?: string | Date | null;
  
  onDateChange?: (event: DateTimePickerEvent, date?: Date) => void;

  // Suas outras props customizadas
  onError?: (error: string | null) => void;
  passwordToMatch?: string;
}