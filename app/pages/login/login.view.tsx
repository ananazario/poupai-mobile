import { Button, Image, Text, TextInput, View } from "react-native"
import Logo from '../../../assets/images/logo.png'
import { Link } from "expo-router"
import Checkbox from "expo-checkbox"


export const LoginView = () => {
    return(
        <View>
            <View>
                <Image source={Logo}/>
            </View>
            <View>
                <Text>Acesse</Text>
                <Text>Com seu login e senha</Text>
            </View>
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput placeholder="Digite seu email"/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput placeholder="Digite sua senha"/>
                </View>
                <View>
                <Checkbox/>
                <Text>Permanecer conectado</Text>
              </View>
                <Button title="Entrar"/>
                <Text>
                Ainda não tem uma conta?{" "}
                <Link href='index'>
                  Cadastre-se
                </Link>
              </Text>
            </View>
        </View>
    )
}