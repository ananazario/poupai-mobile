import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "../pages/initial/initial.view";
import { LoginView } from "../pages/login/login.view";

export default function Index() {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <LoginView/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}