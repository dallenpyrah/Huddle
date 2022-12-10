import GroupModel from './IGroupModel'
import UserModel from '../../auth/models/IUserModel'

export default interface IUserGroupModel {
  id: number
  groupId: number
  userId: number
  group: GroupModel
  user: UserModel
}
