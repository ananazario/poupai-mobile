export const AUTH_ERRORS = {
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  WRONG_PASSWORD: 'auth/wrong-password',
  USER_NOT_FOUND: 'auth/user-not-found',
} as const;

export const AUTH_MESSAGES = {
  EMAIL_ALREADY_IN_USE: 'Esse email já está em uso!',
  INVALID_EMAIL: 'Esse email é inválido!',
  WRONG_PASSWORD: 'Senha incorreta!',
  USER_NOT_FOUND: 'Usuário não encontrado!',
  UNKNOWN_ERROR: 'Erro não tratado:',
} as const;