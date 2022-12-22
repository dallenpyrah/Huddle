import { inject, injectable } from 'inversify'
import pino from 'pino'
import UserGroupModel from '../models/IUserGroupModel'
import GroupModel from '../models/IGroupModel'
import type { IAxiosService } from '../../auth/service-interfaces/IAxiosService'
import { AxiosInstance } from 'axios'
import { TYPES } from '../../../inversify/types'
import { IUserGroupsService } from '../interfaces/IUserGroupsService'

@injectable()
export class UserGroupsService implements IUserGroupsService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async getUserGroups (userId: string): Promise<UserGroupModel[]> {
    try {
      const groups = await this.axios.get<UserGroupModel[]>(`/users/${userId}/groups`)
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createUserGroup (groupModel: GroupModel): Promise<UserGroupModel> {
    try {
      const group = await this.axios.post(
                `/groups/${groupModel.id}/users/${groupModel.creatorId ?? ''}`
      )
      return group.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getUsersByGroupId (groupId: number | undefined): Promise<UserGroupModel[]> {
    try {
      if (groupId === undefined) {
        return []
      } else {
        const users = await this.axios.get<UserGroupModel[]>(`/groups/${groupId}/users`)
        return users.data
      }
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
