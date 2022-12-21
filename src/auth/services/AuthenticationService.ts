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
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import type { IAxiosService } from '../service-interfaces/IAxiosService'
import { IAuthenticationService } from '../service-interfaces/IAuthenticationService'

@injectable()
export class AuthenticationService implements IAuthenticationService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async login (user: AuthenticationModel): Promise<UserCredential> {
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

  async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<User | null> {
    try {
      const createdUser: UserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
      await updateProfile(createdUser.user, { displayName: user.fullName })
      await this.axios.post('/auth/signup', createdUser.user)
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
