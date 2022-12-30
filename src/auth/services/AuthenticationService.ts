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
import pino from 'pino'
import { UserCredential } from '@firebase/auth'
import { auth } from '../../../firebase-config'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import type { IAxiosService } from '../service-interfaces/IAxiosService'
import { IAuthenticationService } from '../service-interfaces/IAuthenticationService'
import UserSignUpModel from '../models/UserSignUpModel'

@injectable()
export class AuthenticationService implements IAuthenticationService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async signInWithEmailAndPassword (user: UserSignUpModel): Promise<UserCredential> {
    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, user.email, user.password)
      await this.axios.post('/auth/signup', loggedInUser.user)
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
      await this.axios.post('/auth/signup', user.user)
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
      await this.axios.post('/auth/signup', user.user)
      return user
    } catch (error: any) {
      this.logger.error(error)
      throw error
    }
  }

  async signUpWithPasswordAndEmail (user: UserSignUpModel | undefined): Promise<UserCredential> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, user?.email as string, user?.password as string)
      console.log(userCredential)
      await updateProfile(userCredential.user, { displayName: `${user?.firstName as string} ${user?.lastName as string}` })
      await this.axios.post('/auth/signup', userCredential.user)
      return userCredential
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
