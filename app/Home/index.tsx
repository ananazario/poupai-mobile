import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeView } from "../pages/home/home.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <HomeView/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}