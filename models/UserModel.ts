export default class UserModel {
  id: string
  name: string
  email: string
  created: Date
  updated: Date

  constructor (id: string, name: string, email: string, created: Date, updated: Date) {
    this.id = id
    this.name = name
    this.email = email
    this.created = created
    this.updated = updated
  }
}
