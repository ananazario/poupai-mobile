import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "./pages/initial/initial.view";
import { ThemeProvider } from "./theme/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

export default function Index() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <InitialView />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
