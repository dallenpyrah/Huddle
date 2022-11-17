import IGroupModel from '../group/IGroupModel'
import UserModel from '../user/IUserModel'

export default interface ICommentModel {
  id: number
  issueId: number
  issue: IGroupModel
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string
}
