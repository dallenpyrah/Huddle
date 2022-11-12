export default class AuthenticationModel {
  fullName: string | undefined
  password: string
  email: string
  confirmPassword: string | undefined
  rememberMe: boolean | undefined = false

  constructor (email: string, password: string, fullName?: string, confirmPassword?: string, rememberMe?: boolean) {
    this.email = email
    this.password = password
    this.fullName = fullName
    this.confirmPassword = confirmPassword
    this.rememberMe = rememberMe
  }
}
