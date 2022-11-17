import GroupModel from '../group/IGroupModel'
import UserModel from '../user/IUserModel'

export default interface IUserGroupModel {
  id: number
  groupId: number
  userId: number
  group: GroupModel
  user: UserModel
}
