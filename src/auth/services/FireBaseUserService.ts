import { AxiosInstance } from 'axios'
import pino from 'pino'
import IUserModel from '../models/IUserModel'

export default class FireBaseUserService {
  private readonly axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserByFireBaseId (fireBaseUserId: string): Promise<IUserModel> {
    try {
      const user = await this.axiosService.get<IUserModel>(`/firebase/${fireBaseUserId}`)
      return user.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
