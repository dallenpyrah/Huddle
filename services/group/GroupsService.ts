import { AxiosInstance } from 'axios'
import UserGroupModel from '../../models/user-group/IUserGroupModel'
import pino from 'pino'
import GroupModel from '../../models/group/IGroupModel'
import UserGroupsService from '../user-group/UserGroupsService'
import IssueModel from '../../models/issue/IIssueModel'

export default class GroupsService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserGroups (userId: number): Promise<UserGroupModel[]> {
    try {
      const groups = await this.axiosService.get<UserGroupModel[]>(`/users/${userId}/groups`)
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getNewestGroups (): Promise<GroupModel[]> {
    try {
      const groups = await this.axiosService.get<GroupModel[]>('/groups/newest')
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createGroup (groupModel: GroupModel): Promise<GroupModel> {
    try {
      const userGroupsService = new UserGroupsService(this.axiosService)
      const group = await this.axiosService.post<GroupModel>('/groups', groupModel)
      console.log(group.data)
      await userGroupsService.createUserGroup(group.data)
      return group.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getGroupById (groupId: number): Promise<GroupModel> {
    try {
      const group = await this.axiosService.get<GroupModel>(`/groups/${groupId}`)
      return group.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getIssuesByGroupId (groupId: number | undefined): Promise<IssueModel[]> {
    try {
      if (groupId !== undefined) {
        const issues = await this.axiosService.get<IssueModel[]>(`/groups/${groupId}/issues`)
        return issues.data
      } else {
        return []
      }
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
