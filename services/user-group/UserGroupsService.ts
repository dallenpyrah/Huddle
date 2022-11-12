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
      const groups = await this.axiosService.get<UserGroupModel[]>(`/usergroups/${userId}`)
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createUserGroup (userGroupModel: GroupModel): Promise<UserGroupModel> {
    try {
      const group = await this.axiosService.post<UserGroupModel>('/usergroups', userGroupModel)
      return group.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
