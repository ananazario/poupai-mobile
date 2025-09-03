import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { loginModel } from "./login.model";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const LoginView = () => {
  const{
    isChecked,
    setChecked,
  } = loginModel();

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <ScrollView>
          <View>
            <View>
              <TouchableOpacity>
                <ChevronLeft />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Acesse</Text>
              <Text>Com seu login e senha</Text>
            </View>
            <View>
              <Input type="text" label="Email" placeholder="Digite seu email"/>
              <Input type="password" label="Senha" placeholder="Digite sua Senha"/>
              <View>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text>Permanecer conectado</Text>
              </View>
              <Button title="Entrar" color="blue" />
              <Text>
                Ainda não tem uma conta? <Link href="/_sitemap">Cadastre-se</Link>
              </Text>
              <View>
                <View />
                <Text>Ou continue com</Text>
                <View />
              </View>
              <View>
                <TouchableOpacity>
                  <FontAwesome name="google" size={26} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
