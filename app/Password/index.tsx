import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PasswordView } from "../pages/Password/password.view";
import { ThemeProvider } from "../theme/ThemeContext";


export default function PasswordPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <PasswordView/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}