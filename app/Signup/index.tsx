import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { SignupView } from "../pages/Signup/signup.view";
import { ThemeProvider } from "../theme/ThemeContext";

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