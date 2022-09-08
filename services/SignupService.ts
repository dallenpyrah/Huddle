
import { Axios } from 'axios'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase-config'
import UserModel from '../models/AuthenticationModel'

class SignupService {
  axios: Axios
  constructor (axios: Axios) {
    this.axios = axios
  }

  async signUpWithPasswordAndEmail (user: UserModel): Promise<any> {
    try {
      const signupResult = await this.axios.post('/v1/auth/signup', user)
      return signupResult.data
    } catch (error) {
      throw error
    }
  }

}

export default SignupService
