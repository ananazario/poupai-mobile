import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { SettingsView } from "../pages/Settings/settings";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <SettingsView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}