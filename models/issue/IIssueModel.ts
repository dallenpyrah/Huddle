import GroupModel from '../group/IGroupModel'
import UserModel from '../user/IUserModel'
import CommentModel from '../comment/ICommentModel'

export default interface IIssueModel {
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
}
