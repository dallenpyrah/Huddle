export default class AuthenticationModel {
  fullName: string
  password: string
  email: string
  confirmPassword: string

  constructor (email: string, password: string, fullName?: string, confirmPassword?: string) {
    this.email = email
    this.password = password
    this.fullName = fullName || ''
    this.confirmPassword = confirmPassword || ''
  }
}
