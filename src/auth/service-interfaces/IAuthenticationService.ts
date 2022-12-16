import AuthenticationModel from '../models/IAuthenticationModel'
import { UserCredential } from '@firebase/auth'
import { User } from 'firebase/auth'

export interface IAuthenticationService {
  login: (user: AuthenticationModel) => Promise<UserCredential>

  loginOrSignupWithGithub: () => Promise<UserCredential>

  loginOrSignupWithGoogle: () => Promise<UserCredential>

  signUpWithPasswordAndEmail: (user: AuthenticationModel) => Promise<User | null>

  getCurrentUser: () => Promise<User | null>
}
