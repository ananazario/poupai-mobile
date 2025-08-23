import { Text, TextInput, View } from "react-native"
import { InputProps } from "./input.types"


export const Input = ({label, placeholder, onChangeText, value}: InputProps) => {
    return(
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}