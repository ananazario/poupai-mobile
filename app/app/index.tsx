import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InitialView } from "../pages/initial/initial.view";

export default function Index() {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <InitialView/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}