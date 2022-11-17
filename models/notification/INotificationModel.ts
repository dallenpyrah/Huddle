import UserModel from '../user/IUserModel'

export default interface INotificationModel {
  id: number
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string
  type: string
}
