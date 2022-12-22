import UserModel from '../../auth/models/UserModel'

export default interface IGroupModel {
  id: number | 0
  name: string
  description: string
  createdAt: Date | undefined
  updatedAt: Date | undefined
  fireBaseUserId: string | undefined
  color: string
  creatorId: number | 0
  user: UserModel | undefined
}
