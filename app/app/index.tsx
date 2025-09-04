import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "../pages/initial/initial.view";
import { ThemeProvider } from "../theme/ThemeContext";

export default function Index() {
    return(
        <ThemeProvider>
            <SafeAreaProvider>
            <SafeAreaView>
                <InitialView/>
            </SafeAreaView>
        </SafeAreaProvider>
        </ThemeProvider>
    )
}