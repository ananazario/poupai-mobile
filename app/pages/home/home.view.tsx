import { Text, TouchableOpacity, View } from "react-native"
import { Bolt } from 'lucide-react-native'

export const HomeView = () => {
    return(
        <View>
            <View>
                <View>
                    <Text>Olá Joana!</Text>
                    <Text>Saldo total em conta</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <TouchableOpacity>
                    <Bolt/>
                </TouchableOpacity>
            </View>
        </View>
    )
}