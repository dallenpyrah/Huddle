import { injectable } from 'inversify'
import { IEmailService } from '../interfaces/IEmailService'

@injectable()
export class EmailService implements IEmailService {
  async sendEmail (email: string, subject: string, message: string): Promise<void> {
  }
}
