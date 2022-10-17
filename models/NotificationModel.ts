import UserModel from './UserModel'

export default class NotificationModel {
  id: number
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string
  type: string

  constructor (id: number, userId: number, user: UserModel, createdAt: Date, updatedAt: Date, content: string, type: string) {
    this.id = id
    this.userId = userId
    this.user = user
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.content = content
    this.type = type
  }
}
