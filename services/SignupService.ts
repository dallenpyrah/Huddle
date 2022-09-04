
import { Axios } from 'axios'
import UserModel from '../models/UserModel'

class SignupService {
  axios: Axios
  constructor (axios: Axios) {
    this.axios = axios
  }

  async AddUser (user: UserModel): Promise<void> {
    try {
      await this.axios.post('/api/adduser', user)
    } catch (error) {
      console.log(error)
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
