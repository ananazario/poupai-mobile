import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesome } from "@expo/vector-icons";

export const LoginView = () => {
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
          <TextInput placeholder="Digite seu email" />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput placeholder="Digite sua senha" />
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
