import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../theme/ThemeContext";
import { InitialView } from "../pages/initial/initial.view";

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