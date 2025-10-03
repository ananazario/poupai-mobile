import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TransactionsView } from "../pages/transactions/transactions.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <TransactionsView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}