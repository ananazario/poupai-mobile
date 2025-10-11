import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { SettingsView } from "../pages/Settings/settings";
import { ThemeProvider } from "../theme/ThemeContext";



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