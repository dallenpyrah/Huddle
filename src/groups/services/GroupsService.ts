import { AxiosInstance } from 'axios'
import UserGroupModel from '../models/IUserGroupModel'
import pino from 'pino'
import GroupModel from '../models/IGroupModel'
import UserGroupsService from './UserGroupsService'
import IssueModel from '../../issues/models/IIssueModel'

export default class GroupsService {
  axiosService: AxiosInstance
  userGroupsService: UserGroupsService
  private readonly logger: pino.Logger

  constructor (axiosService: AxiosInstance, userGroupsService: UserGroupsService, logger: pino.Logger) {
    this.axiosService = axiosService
    this.userGroupsService = userGroupsService
    this.logger = logger
  }

  async getUserGroups (userId: number): Promise<UserGroupModel[]> {
    try {
      const { data } = await this.axiosService.get<UserGroupModel[]>(`/users/${userId}/groups`)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getNewestGroups (): Promise<GroupModel[]> {
    try {
      const { data } = await this.axiosService.get<GroupModel[]>('/groups/newest')
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createGroup (groupModel: GroupModel): Promise<GroupModel> {
    try {
      const { data } = await this.axiosService.post<GroupModel>('/groups', groupModel)
      await this.userGroupsService.createUserGroup(data)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getGroupById (groupId: number): Promise<GroupModel> {
    try {
      const { data } = await this.axiosService.get<GroupModel>(`/groups/${groupId}`)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getIssuesByGroupId (groupId?: number): Promise<IssueModel[]> {
    try {
      if (groupId != null) {
        const { data } = await this.axiosService.get<IssueModel[]>(`/groups/${groupId}/issues`)
        return data
      } else {
        return []
      }
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
