import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IncomeView } from "../pages/income/income.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <IncomeView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}