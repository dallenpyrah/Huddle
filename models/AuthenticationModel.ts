export default class AuthenticationModel {
  fullName: string | undefined
  password: string
  email: string
  confirmPassword: string | undefined

  constructor (email: string, password: string, fullName?: string, confirmPassword?: string) {
    this.email = email
    this.password = password
    this.fullName = fullName
    this.confirmPassword = confirmPassword
  }
}
