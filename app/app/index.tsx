import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { InitialView } from "../pages/initial/initial.view";
import { LoginView } from "../pages/login/login.view";

export default function Index() {
    return(
        <ThemeProvider>
            <SafeAreaProvider>
            <SafeAreaView>
                <LoginView/>
            </SafeAreaView>
        </SafeAreaProvider>
        </ThemeProvider>
    )
}