import GroupModel from '../../groups/models/IGroupModel'
import UserModel from '../../auth/models/IUserModel'
import CommentModel from '../../comments/models/ICommentModel'

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
