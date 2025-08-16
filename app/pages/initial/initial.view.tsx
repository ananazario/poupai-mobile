import { Button, Image, Text, View } from "react-native"
import Logo from '../../../assets/images/logo.png'

export const InitialView = () => {
    return(
        <View>
            <View>
                <Image source={Logo} resizeMode="contain"/>
                <Text>Poup.ai</Text>
            </View>
            <View>
                <View>
                    <Text>Bem vindo!</Text>
                    <Text>Descubra soluções financeiras inovadoras e confiáveis para um futuro próspero.</Text>
                </View>
                <Button title="Acessar"/>
            </View>
        </View>
    )
}