import { UserCredential } from 'firebase/auth'

export default class AuthenticationResponseModel {
  userCredential: UserCredential | undefined
  errorMessage: string | ''

  constructor (userCredential: UserCredential, errorMessage: string) {
    this.userCredential = userCredential
    this.errorMessage = errorMessage
  }
}
