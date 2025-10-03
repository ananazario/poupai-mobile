import auth from '@react-native-firebase/auth';
import { AUTH_ERRORS, AUTH_MESSAGES } from './auth.constants';

export class AuthService {
  async register(email: string, password: string): Promise<void> {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('Usuário registrado com sucesso!');
    } catch (error: any) {
      this.handleAuthError(error);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Login realizado com sucesso!');
    } catch (error: any) {
      this.handleAuthError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await auth().signOut();
      console.log('Usuário deslogado com sucesso!');
    } catch (error: any) {
      console.error('Erro ao deslogar:', error);
    }
  }

  private handleAuthError(error: any): void {
    switch (error.code) {
      case AUTH_ERRORS.EMAIL_ALREADY_IN_USE:
        console.log(AUTH_MESSAGES.EMAIL_ALREADY_IN_USE);
        break;
      case AUTH_ERRORS.INVALID_EMAIL:
        console.log(AUTH_MESSAGES.INVALID_EMAIL);
        break;
      case AUTH_ERRORS.WRONG_PASSWORD:
        console.log(AUTH_MESSAGES.WRONG_PASSWORD);
        break;
      case AUTH_ERRORS.USER_NOT_FOUND:
        console.log(AUTH_MESSAGES.USER_NOT_FOUND);
        break;
      default:
        console.error(AUTH_MESSAGES.UNKNOWN_ERROR, error);
        break;
    }
  }
}

export const authService = new AuthService();
