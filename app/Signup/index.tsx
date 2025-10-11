import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { SignupPage } from "../pages/signup";


export default function SignUpPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <SignupPage />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}