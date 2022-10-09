import { AxiosInstance } from 'axios'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup, updateProfile,
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
      const loggedInUser = await createUserWithEmailAndPassword(auth, user.email, user.password)
      window.localStorage.setItem('user', JSON.stringify(loggedInUser))
      return loggedInUser
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async loginOrSignupWithGithub (): Promise<UserCredential> {
    try {
      const provider = new GithubAuthProvider()
      const user = await signInWithPopup(auth, provider)
      window.localStorage.setItem('user', JSON.stringify(user))
      return user
    } catch (error: any) {
      this.logger.error(error)
      throw error
    }
  }

  async loginOrSignupWithGoogle (): Promise<UserCredential> {
    try {
      const provider = new GoogleAuthProvider()
      const user = await signInWithPopup(auth, provider)
      window.localStorage.setItem('user', JSON.stringify(user))
      return user
    } catch (error: any) {
      this.logger.error(error)
      throw error
    }
  }

  async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<User | null> {
    try {
      const createdUser: UserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
      await updateProfile(createdUser.user, { displayName: user.fullName })
      const updatedUser = await this.getCurrentUser()
      window.localStorage.setItem('user', JSON.stringify(updatedUser))
      return updatedUser
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
