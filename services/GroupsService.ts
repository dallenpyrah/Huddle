import { AxiosInstance } from 'axios'
import UserGroupModel from '../models/UserGroupModel'
import pino from 'pino'

export default class GroupsService {
  axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserGroups (userId: string): Promise<UserGroupModel[]> {
    try {
      const groups = await this.axiosService.get<UserGroupModel[]>(`/usergroups/${userId}`)
      sessionStorage.setItem('userGroups', JSON.stringify(groups.data))
      return groups.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
