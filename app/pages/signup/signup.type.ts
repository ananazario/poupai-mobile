type SignupProps = {
    email: string,
    handleEmail: (value: string) => void,
    password: string,
    handlePassword: (value: string) => void,
    handleSignUp: () => void;
}

export type { SignupProps };
