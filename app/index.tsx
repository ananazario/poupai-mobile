import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "./pages/initial/initial.view";
import { ThemeProvider } from "./theme/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import { LoadingView } from "./pages/Loading/loading.view";

export default function Index() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


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
