import { TextStyle } from 'react-native';

export type InputProps = {
  type: 'text' | 'password' | 'email' | 'date' | 'number' | 'confirmPassword';
  label?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: TextStyle;
  onError?: (error: string | null) => void;
  passwordToMatch?: string;
};
