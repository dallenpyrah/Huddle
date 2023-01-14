export interface IEmailService {
  sendEmail: (email: string, subject: string, message: string) => Promise<void>
}
