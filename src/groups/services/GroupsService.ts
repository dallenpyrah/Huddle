import { AxiosInstance } from 'axios'
import UserGroupModel from '../models/IUserGroupModel'
import pino from 'pino'
import GroupModel from '../models/IGroupModel'
import IssueModel from '../../issues/models/IIssueModel'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import type { IAxiosService } from '../../auth/interfaces/service/IAxiosService'
import type { IUserGroupsService } from '../interfaces/IUserGroupsService'
import { IGroupsService } from '../interfaces/IGroupsService'

@injectable()
export class GroupsService implements IGroupsService {
  private readonly axiosService: IAxiosService
  private readonly userGroupsService: IUserGroupsService
  private readonly logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService, @inject(TYPES.UserGroupsService) userGroupsService: IUserGroupsService) {
    this.axiosService = axiosService
    this.userGroupsService = userGroupsService
    this.axios = axiosService.getAxiosInstance()
  }

  async getUserGroups (userId: number): Promise<UserGroupModel[]> {
    try {
      const { data } = await this.axios.get<UserGroupModel[]>(`/users/${userId}/groups`)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getNewestGroups (): Promise<GroupModel[]> {
    try {
      const { data } = await this.axios.get<GroupModel[]>('/groups/newest')
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createGroup (groupModel: GroupModel): Promise<GroupModel> {
    try {
      const { data } = await this.axios.post<GroupModel>('/groups', groupModel)
      await this.userGroupsService.createUserGroup(data)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getGroupById (groupId: number): Promise<GroupModel> {
    try {
      const { data } = await this.axios.get<GroupModel>(`/groups/${groupId}`)
      return data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getIssuesByGroupId (groupId?: number): Promise<IssueModel[]> {
    try {
      if (groupId != null) {
        const { data } = await this.axios.get<IssueModel[]>(`/groups/${groupId}/issues`)
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
