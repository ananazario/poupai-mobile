import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LoadingView } from "../pages/Loading/loading.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function LoagindPage() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <LoadingView />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}