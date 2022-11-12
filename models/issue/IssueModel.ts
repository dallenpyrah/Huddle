import GroupModel from '../group/GroupModel'
import UserModel from '../user/UserModel'
import CommentModel from '../comment/CommentModel'

export default class IssueModel {
  id: number
  groupId: number
  group: GroupModel
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  status: string
  userId: number
  user: UserModel
  comments: CommentModel[]
  language: string
  framework: string

  constructor (id: number, groupId: number, group: GroupModel, title: string, description: string, createdAt: Date, updatedAt: Date, status: string, userId: number, user: UserModel, comments: CommentModel[], language: string, framework: string) {
    this.id = id
    this.groupId = groupId
    this.group = group
    this.title = title
    this.description = description
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.status = status
    this.userId = userId
    this.user = user
    this.comments = comments
    this.language = language
    this.framework = framework
  }
}
