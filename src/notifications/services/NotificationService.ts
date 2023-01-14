import { AxiosInstance } from 'axios'
import pino from 'pino'
import NotificationModel from '../models/INotificationModel'
import type { IAxiosService } from '../../auth/interfaces/service/IAxiosService'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import { INotificationService } from '../service-interfaces/INotificationService'

@injectable()
export class NotificationService implements INotificationService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async getUserNotifications (userId: number): Promise<NotificationModel[]> {
    try {
      const notifications = await this.axios.get<NotificationModel[]>(`/notifications/${userId}`)
      return notifications.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
