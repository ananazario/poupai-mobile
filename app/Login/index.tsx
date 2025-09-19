import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LoginView } from "../pages/login/login.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <LoginView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}