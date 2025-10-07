import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Login/index" options={{ headerShown: false }} />
        <Stack.Screen name="Signup/index" options={{ headerShown: false }} />
        <Stack.Screen name="Home/index" options={{ headerShown: false }} />
        <Stack.Screen name="Settings/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Transactions/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
