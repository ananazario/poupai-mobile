import { signupModel } from "./signup.model"
import { SignupView } from "./signup.view";

export const SignupPage = () => {
    const model = signupModel();

    return <SignupView {...model} />
}