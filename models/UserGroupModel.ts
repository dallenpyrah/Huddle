import Group from './GroupModel'

export default class UserGroupModel {
  id: number
  groupId: number
  userId: number
  group: Group

  constructor (id: number, groupId: number, userId: number, group: Group) {
    this.id = id
    this.groupId = groupId
    this.userId = userId
    this.group = group
  }
}
