import UserModel from '../../auth/models/UserModel'

export default interface INotificationModel {
  id: number
  userId: number
  user: UserModel
  createdAt: Date
  updatedAt: Date
  content: string
  type: string
}
