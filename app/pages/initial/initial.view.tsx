import { Button, Image, Text, View } from "react-native";
import HomeScreenImage from "../../../assets/images/home-screen.png";

export const InitialView = () => {
  return (
    <View>
      <Image source={HomeScreenImage} resizeMode="contain" />
      <View>
        <Text>Boas Vindas!</Text>
        <Text>
          Descubra soluções financeiras inovadoras e confiáveis para um futuro
          próspero.
        </Text>
      </View>
      <Button title="Acessar" />
    </View>
  );
};
