import { AxiosInstance} from "axios"
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User, UserCredential } from "firebase/auth"
import AuthenticationResponseContract from "../contracts/AuthenticationResponseContract"
import { auth } from "../firebase-config"
import AuthenticationModel from "../models/AuthenticationModel"
import AuthenticationResponseModel from "../models/AuthenticationResponseModel"

class AuthenticationService {
    axiosService: AxiosInstance

    constructor (axiosService: AxiosInstance) {
      this.axiosService = axiosService
    }
  
    async login (user: AuthenticationModel): Promise<AuthenticationResponseContract> {
      try {
        const loginResult = await this.axiosService.post('/auth/login', user)
        return loginResult.data
      } catch (error) {
        throw error
      }
    }
  
    async loginOrSignupWithGithub() : Promise<AuthenticationResponseModel> {
      let authenticationResponseModel = {} as AuthenticationResponseModel;

      try {
        const provider = new GithubAuthProvider();
        const githubLoginResult = await signInWithPopup(auth, provider);
        authenticationResponseModel.userCrendential = githubLoginResult;
        return authenticationResponseModel
      } catch (error: any) {
        authenticationResponseModel.errorMesssage = error.message;
        return authenticationResponseModel;
      }
    }

    async loginOrSignupWithGoogle() : Promise<AuthenticationResponseModel> {
        let authenticationResponseModel = {} as AuthenticationResponseModel;

        try {
            const provider = new GoogleAuthProvider();
            const googleLoginResult = await signInWithPopup(auth, provider);
            authenticationResponseModel.userCrendential = googleLoginResult;
            return authenticationResponseModel;
        } catch (error: any) {
            authenticationResponseModel.errorMesssage = error.message;
            return authenticationResponseModel;
        }
    }

    async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<AuthenticationResponseContract> {
      try {
        const signupResult = await this.axiosService.post('/auth/signup', user)
        return signupResult.data
      } catch (error) {
        throw error
      }
    }
  
  }
  
  export default AuthenticationService
  