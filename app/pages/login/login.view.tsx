import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export const LoginView = (props) => {
  const { email, setEmail, password, setPassword } = { ...props }

  console.log(email, password)

  return (
    <View>
      <View>
        <TouchableOpacity>
            <ChevronLeft/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Acesse</Text>
        <Text>Com seu login e senha</Text>
      </View>
      <View>
        <View>
          <Text>Email</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Digite seu email" />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" />
        </View>
        <View>
          <Checkbox />
          <Text>Permanecer conectado</Text>
        </View>
        <Button title="Entrar" />
        <Text>
          Ainda não tem uma conta? <Link href="index">Cadastre-se</Link>
        </Text>
        <View>
            <View />
            <Text>Ou continue com</Text>
            <View />
        </View>
        <View>
            <TouchableOpacity>
                <FontAwesome
                name="google"
                size={26}
                />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
