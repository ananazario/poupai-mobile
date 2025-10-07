type SignupProps = {
  name: string;
  handleName: (value: string) => void;
  email: string;
  handleEmail: (value: string) => void;
  password: string;
  handlePassword: (value: string) => void;
  confirmPassword: string;
  handleConfirmPassword: (value: string) => void;
  handleSignUp: () => void;
  message: string;
};

export type { SignupProps };
