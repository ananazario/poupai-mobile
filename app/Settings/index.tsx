import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { SettingsView } from "../pages/Settings";

export default function SettingsPage() {
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