import GroupModel from '../group/GroupModel'
import UserModel from '../user/UserModel'

export default class UserGroupModel {
  id: number
  groupId: number
  userId: number
  group: GroupModel
  user: UserModel

  constructor (id: number, groupId: number, userId: number, group: GroupModel, user: UserModel) {
    this.id = id
    this.groupId = groupId
    this.userId = userId
    this.group = group
    this.user = user
  }
}
