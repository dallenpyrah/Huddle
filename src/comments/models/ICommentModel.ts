import UserModel from '../../auth/models/UserModel'
import IIssueModel from '../../issues/models/IIssueModel'

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
