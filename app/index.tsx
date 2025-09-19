import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "./pages/initial/initial.view";
import { ThemeProvider } from "./theme/ThemeContext";
import { SignupView } from "./pages/Signup/signup.view";

export default function Index() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <SignupView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
