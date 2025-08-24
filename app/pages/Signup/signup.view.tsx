import { Button, Image, Text, TextInput, View } from "react-native"
import Logo from '../../../assets/images/logo.png'
import { Link } from "expo-router"
import Index from "@/app/app"

export const SignupView = () => {
    return(
        <View>
            <View>
                <Image resizeMode="contain" source={Logo}/>
            </View>
            <View>
                <Text>Cadastre-se</Text>
                <Text>Com seu email e senha</Text>
            </View>
            <View>
                <View>
                    <Text>Nome</Text>
                    <TextInput placeholder="Digite seu nome"/>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput placeholder="Digite seu email"/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput placeholder="Digite sua Senha"/>
                </View>
                <Button title="Cadastrar"/>
                <Text>Já poussui uma conta?{" "}<Link href='index'>Login</Link></Text>
            </View>
        </View>
    )
}