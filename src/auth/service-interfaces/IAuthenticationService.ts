import { UserCredential } from '@firebase/auth'
import { User } from 'firebase/auth'
import UserSignUpModel from '../models/UserSignUpModel'

export interface IAuthenticationService {
  signInWithEmailAndPassword: (user: UserSignUpModel) => Promise<UserCredential>

  loginOrSignupWithGithub: () => Promise<UserCredential>

  loginOrSignupWithGoogle: () => Promise<UserCredential>

  signUpWithPasswordAndEmail: (user: UserSignUpModel | undefined) => Promise<UserCredential>

  getCurrentUser: () => Promise<User | null>
}
