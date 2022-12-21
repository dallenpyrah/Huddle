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
import AuthenticationModel from '../models/IAuthenticationModel'
import pino from 'pino'
import { UserCredential } from '@firebase/auth'
import { auth } from '../../../firebase-config'
import UserSignUpModel from '../models/UserSignUpModel'

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

  async signUpWithPasswordAndEmail (user: UserSignUpModel): Promise<User | null> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user?.email, user?.password)

      if (auth.currentUser != null) {
        await updateProfile(auth.currentUser, {
          displayName: `${user?.firstName} ${user?.lastName}`
        })
      }

      await this.axiosService.post('/auth/signup', userCredential.user)
      return userCredential.user
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
