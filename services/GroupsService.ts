import { AxiosInstance } from 'axios'
import UserGroupModel from '../models/UserGroupModel'
import pino from 'pino'
import GroupModel from '../models/GroupModel'

export default class GroupsService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserGroups (userId: string): Promise<UserGroupModel[]> {
    try {
      const groups = await this.axiosService.get<UserGroupModel[]>(`/usergroups/${userId}`)
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
      const group = await this.axiosService.post<GroupModel>('/groups', groupModel)
      return group.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
