
import { Axios } from 'axios'
import UserModel from '../models/UserModel'

class SignupService {
  axios: Axios
  constructor (axios: Axios) {
    this.axios = axios
  }

  async AddUser (user: UserModel): Promise<any> {
    try {
      const signupResult = await this.axios.post('/v1/auth/signup', user)
      return signupResult.data
    } catch (error) {
      throw error
    }
  }

  IsUserPasswordMatch (password: string, confirmPassword: string): boolean {
    if (password === confirmPassword) {
      return true
    } else {
      return false
    }
  }
}

export default SignupService
