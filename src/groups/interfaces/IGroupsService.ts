import UserGroupModel from '../models/IUserGroupModel'
import GroupModel from '../models/IGroupModel'
import IssueModel from '../../issues/models/IIssueModel'

export interface IGroupsService {
  getUserGroups: (userId: number) => Promise<UserGroupModel[]>
  getNewestGroups: () => Promise<GroupModel[]>
  createGroup: (groupModel: GroupModel) => Promise<GroupModel>
  getGroupById: (groupId: number) => Promise<GroupModel>
  getIssuesByGroupId: (groupId?: number) => Promise<IssueModel[]>
}
