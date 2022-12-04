import UserModel from '../user/IUserModel'
import IIssueModel from '../issue/IIssueModel'

export default interface ICommentModel {
  id: number
  issueId: number
  issue: IIssueModel
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string
}
