import { UserCredential } from 'firebase/auth'

export default interface IAuthenticationResponseModel {
  userCredential: UserCredential | undefined
  errorMessage: string | ''
}
