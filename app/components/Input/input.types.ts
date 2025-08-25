import { TextStyle } from "react-native";

export type InputProps = {
    type: 'text' | 'password' | 'email' | 'date' | 'number';
    label?: string;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    style?: TextStyle
}