import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeView } from "../pages/home/home.view";
import { ThemeProvider } from "../theme/ThemeContext";
import Home from "../pages/home/home";

export default function HomePage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Home/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}