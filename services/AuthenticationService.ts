import { AxiosInstance } from 'axios'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import AuthenticationResponseContract from '../contracts/AuthenticationResponseContract'
import { auth } from '../firebase-config'
import AuthenticationModel from '../models/AuthenticationModel'
import AuthenticationResponseModel from '../models/AuthenticationResponseModel'
import pino from 'pino'

class AuthenticationService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino({ prettyPrint: true })

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async login (user: AuthenticationModel): Promise<AuthenticationResponseContract> {
    try {
      const loginResult = await this.axiosService.post('/auth/login', user)
      return loginResult.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async loginOrSignupWithGithub (): Promise<AuthenticationResponseModel> {
    const authenticationResponseModel: AuthenticationResponseModel = { userCredential: undefined, errorMessage: '' }

    try {
      const provider = new GithubAuthProvider()
      authenticationResponseModel.userCredential = await signInWithPopup(auth, provider)
      return authenticationResponseModel
    } catch (error: any) {
      authenticationResponseModel.errorMessage = error.message
      return authenticationResponseModel
    }
  }

  async loginOrSignupWithGoogle (): Promise<AuthenticationResponseModel> {
    const authenticationResponseModel: AuthenticationResponseModel = { userCredential: undefined, errorMessage: '' }

    try {
      const provider = new GoogleAuthProvider()
      authenticationResponseModel.userCredential = await signInWithPopup(auth, provider)
      return authenticationResponseModel
    } catch (error: any) {
      authenticationResponseModel.errorMessage = error.message
      return authenticationResponseModel
    }
  }

  async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<AuthenticationResponseContract> {
    try {
      const signupResult = await this.axiosService.post('/auth/signup', user)
      return signupResult.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}

export default AuthenticationService
