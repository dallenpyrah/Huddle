import { Axios } from "axios"
import { FirebaseError } from "firebase/app"
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User, UserCredential } from "firebase/auth"
import { auth } from "../firebase-config"
import AuthenticationModel from "../models/AuthenticationModel"
import AuthenticationResponseModel from "../models/AuthenticationResponseModel"

class AuthenticationService {
    axios: Axios
    constructor (axios: Axios) {
      this.axios = axios
    }
  
    async login (user: AuthenticationModel): Promise<any> {
      try {
        const loginResult = await this.axios.post('/v1/auth/login', user)
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

    async signUpWithPasswordAndEmail (user: AuthenticationModel): Promise<any> {
      try {
        const signupResult = await this.axios.post('/v1/auth/signup', user)
        return signupResult.data
      } catch (error) {
        throw error
      }
    }
  
  }
  
  export default AuthenticationService
  