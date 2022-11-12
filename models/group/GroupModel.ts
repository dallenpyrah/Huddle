import UserModel from '../user/UserModel'

export default class GroupModel {
  id: number | 0
  name: string
  description: string
  createdAt: Date | undefined
  updatedAt: Date | undefined
  fireBaseUserId: string | undefined
  color: string
  creatorId: number | 0
  user: UserModel | undefined

  constructor (name: string, description: string, color: string, fireBaseUserId: string | undefined, creatorId: number = 0, id: number = 0, createdAt?: Date, updatedAt?: Date, user?: UserModel) {
    this.name = name
    this.description = description
    this.color = color
    this.fireBaseUserId = fireBaseUserId
    this.creatorId = creatorId
    this.id = id
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.user = user
  }
}
