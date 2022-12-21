import UserGroupModel from '../models/IUserGroupModel'
import GroupModel from '../models/IGroupModel'

export interface IUserGroupsService {
  getUserGroups: (userId: string) => Promise<UserGroupModel[]>
  createUserGroup: (groupModel: GroupModel) => Promise<UserGroupModel>
  getUsersByGroupId: (groupId: number | undefined) => Promise<UserGroupModel[]>
}
