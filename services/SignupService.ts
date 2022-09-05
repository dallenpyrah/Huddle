
import { Axios } from 'axios'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase-config'
import UserModel from '../models/AuthenticationModel'

class SignupService {
  axios: Axios
  constructor (axios: Axios) {
    this.axios = axios
  }

  async addUser (user: UserModel): Promise<any> {
    try {
      const signupResult = await this.axios.post('/v1/auth/signup', user)
      return signupResult.data
    } catch (error) {
      throw error
    }
  }

  async login (user: UserModel): Promise<any> {
    try {
      const loginResult = await this.axios.post('/v1/auth/login', user)
      return loginResult.data
    } catch (error) {
      throw error
    }
  }

  async loginWithGithub() {
    try {
      const provider = new GithubAuthProvider();
      provider.addScope('repo');
      provider.setCustomParameters({
        'allow_signup': 'true'
      });

      const githubLoginResult = await signInWithPopup(auth, provider);
      return githubLoginResult;
    } catch (error) {
      console.log(error)
    }
  }

}

export default SignupService
