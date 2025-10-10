import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { Signup } from "../pages/signup";


export default function SignUpPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Signup />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}