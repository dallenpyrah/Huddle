import GroupModel from './GroupModel'
import UserModel from './UserModel'

export default class CommentModel {
  id: number
  issueId: number
  issue: GroupModel
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string

  constructor (id: number, issueId: number, issue: GroupModel, userId: number, user: UserModel, createdAt: Date, updatedAt: Date, content: string) {
    this.id = id
    this.issueId = issueId
    this.issue = issue
    this.userId = userId
    this.user = user
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.content = content
  }
}
