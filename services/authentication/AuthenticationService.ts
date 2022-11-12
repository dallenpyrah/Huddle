import { AxiosInstance } from 'axios'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User
} from 'firebase/auth'
import { auth } from '../../firebase-config'
import AuthenticationModel from '../../models/authentication/AuthenticationModel'
import pino from 'pino'
import { UserCredential } from '@firebase/auth'

export default class AuthenticationService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async login (user: AuthenticationModel): Promise<UserCredential> {
    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, user.email, user.password)
      await this.axiosService.post('/auth/signup', loggedInUser.user)
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
      await this.axiosService.post('/auth/signup', user.user)
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
      await this.axiosService.post('/auth/signup', user.user)
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
      await this.axiosService.post('/auth/signup', createdUser.user)
      return await this.getCurrentUser()
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCurrentUser (): Promise<User | null> {
    console.log(auth.currentUser)
    return auth.currentUser
  }
}
