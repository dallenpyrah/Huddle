import GroupModel from './GroupModel'

export default class UserGroupModel {
  id: number
  groupId: number
  userId: number
  group: GroupModel

  constructor (id: number, groupId: number, userId: number, group: GroupModel) {
    this.id = id
    this.groupId = groupId
    this.userId = userId
    this.group = group
  }
}
