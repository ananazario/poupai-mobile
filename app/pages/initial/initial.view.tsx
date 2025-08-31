import { Button, Image, Text, View } from "react-native";
import HomeScreenImage from "../../../assets/images/home-screen.png";
import { useTheme } from "@/app/theme/ThemeContext";
import { initialStyles } from "./initial.styles";

export const InitialView = () => {

  const {colors} = useTheme();
  const styles = initialStyles(colors);

  return (
    <View style={styles.container}>
      <Image source={HomeScreenImage} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.title}>Boas Vindas!</Text>
        <Text style={styles.text}>
          Descubra soluções financeiras inovadoras e confiáveis para um futuro
          próspero.
        </Text>
      </View>
      <Button title="Acessar" />
    </View>
  );
};
