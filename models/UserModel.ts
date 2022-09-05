export default class UserModel {
  fullName: string
  password: string
  email: string
  confirmPassword: string

  constructor (fullName: string, email: string, password: string, confirmPassword: string) {
    this.fullName = fullName
    this.password = password
    this.email = email
    this.confirmPassword = confirmPassword
  }
}
