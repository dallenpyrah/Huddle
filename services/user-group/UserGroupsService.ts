import { AxiosInstance } from 'axios'
import pino from 'pino'
import UserGroupModel from '../../models/user-group/UserGroupModel'
import GroupModel from '../../models/group/GroupModel'

export default class UserGroupsService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserGroups (userId: string): Promise<UserGroupModel[]> {
    try {
      const groups = await this.axiosService.get<UserGroupModel[]>(`/users/${userId}/groups`)
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createUserGroup (groupModel: GroupModel): Promise<UserGroupModel> {
    try {
      const group = await this.axiosService.post(`/groups/${groupModel.id}/users/${groupModel.user?.id ?? ''}`)
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
        const users = await this.axiosService.get<UserGroupModel[]>(`/groups/${groupId}/users`)
        return users.data
      }
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}