import { Stack } from "expo-router";
import "react-native-reanimated";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // O "ouvinte" do Firebase que verifica o status do login
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Assim que a primeira verificação é feita, marcamos o carregamento como concluído
      if (authLoading) {
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Se o carregamento da autenticação terminou E ainda não temos um usuário...
    if (!authLoading && !user) {
      // ...tentamos fazer o login anônimo para desenvolvimento.
      signInAnonymously(auth).catch((error) => {
        console.error("Erro no login anônimo de desenvolvimento:", error);
        Alert.alert(
          "Erro de Desenvolvimento",
          `Não foi possível fazer o login anônimo: ${error.message}`
        );
        // Mesmo se o login falhar, escondemos a splash screen para não travar o app
        SplashScreen.hideAsync();
      });
    }
  }, [authLoading, user]);

  useEffect(() => {
    // 2. Fica vigiando: Assim que o carregamento da autenticação terminar...
    if (!authLoading) {
      // ...mandamos esconder a tela de splash.
      SplashScreen.hideAsync();
    }
  }, [authLoading]); // ...este efeito roda sempre que 'authLoading' muda.


  // 3. Enquanto a verificação inicial não termina, não renderizamos nada.
  // A tela de splash nativa continuará visível.
  if (authLoading) {
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
      <Stack.Screen name="Transactions/index" options={{ headerShown: false }} />
      <Stack.Screen name="Expense/index" options={{ headerShown: false }} />
      <Stack.Screen name="Income/index" options={{ headerShown: false }} />
      <Stack.Screen name="Password/index" options={{ headerShown: false }} />
      <Stack.Screen name="Loading/index" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
