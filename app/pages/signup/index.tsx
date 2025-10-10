import { useSignupModel } from "./signup.model"
import { SignupView } from "./signup.view";

export const Signup = () => {
    const model = useSignupModel();

    return <SignupView {...model} />
}