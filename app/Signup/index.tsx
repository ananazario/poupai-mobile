import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { ThemeProvider } from "../theme/ThemeContext";
import { SignupView } from "../pages/signup/signup.view";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <SignupView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}