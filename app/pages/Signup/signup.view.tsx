import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import Index from "@/app/app";
import { ChevronLeft } from "lucide-react-native";
import { Button } from "@/app/components/Button";

export const SignupView = () => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => router.push('/Login')}>
          <ChevronLeft />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Cadastre-se</Text>
        <Text>Com seu email e senha</Text>
      </View>
      <View>
        <View>
          <Text>Nome</Text>
          <TextInput placeholder="Digite seu nome" />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput placeholder="Digite seu email" />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput placeholder="Digite sua Senha" />
        </View>
        <View>
          <Text>Confirme sua senha</Text>
          <TextInput placeholder="Digite sua Senha novamente" />
        </View>
        <Button color="blue" title="Cadastrar" href="/Login"/>
        <Text>
          Já poussui uma conta? <Link href="index">Login</Link>
        </Text>
      </View>
    </View>
  );
};
