export default class UserModel {
  fullName: string
  password: string
  email: string

  constructor (fullName: string, email: string, password: string) {
    this.fullName = fullName
    this.password = password
    this.email = email
  }
}
