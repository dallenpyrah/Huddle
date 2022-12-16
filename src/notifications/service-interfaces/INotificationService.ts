import NotificationModel from '../models/INotificationModel'

export interface INotificationService {
  getUserNotifications: (userId: number) => Promise<NotificationModel[]>
}
