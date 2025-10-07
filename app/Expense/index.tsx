import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TransactionsView } from "../pages/transactions/transactions.view";
import { ThemeProvider } from "../theme/ThemeContext";
import { ExpenseView } from "../pages/Expense/expense.view";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ExpenseView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}