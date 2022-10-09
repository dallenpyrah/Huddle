import { AxiosInstance } from 'axios'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from 'firebase/auth'
import { auth } from '../firebase-config'
import AuthenticationModel from '../models/AuthenticationModel'
import pino from 'pino'
import { UserCredential } from '@firebase/auth'

class AuthenticationService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async login (user: AuthenticationModel): Promise<UserCredential> {
    try {
      return await createUserWithEmailAndPassword(auth, user.email, user.password)
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async loginOrSignupWithGithub (): Promise<UserCredential> {
    try {
      const provider = new GithubAuthProvider()
      return await signInWithPopup(auth, provider)
    } catch (error: any) {
      this.logger.error(error)
      throw error
    }
  }

  async loginOrSignupWithGoogle (): Promise<UserCredential> {
    try {
      const provider = new GoogleAuthProvider()
      return await signInWithPopup(auth, provider)
    } catch (error: any) {
      this.logger.error(error)
      throw error
    }
  }

  async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<UserCredential> {
    try {
      return await createUserWithEmailAndPassword(auth, user.email, user.password)
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCurrentUser (): Promise<User | null> {
    return auth.currentUser
  }
}

export default AuthenticationService
