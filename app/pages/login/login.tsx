import { LoginModel } from "./login.model"
import { LoginView } from "./login.view"

const LoginPage = () => {
    const model = LoginModel();
    return <LoginView {...model} />;
}

export { LoginPage };
