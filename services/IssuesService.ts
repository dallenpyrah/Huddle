import axios, { AxiosInstance } from 'axios'
import IssueModel from '../models/IssueModel'
import pino from 'pino'

export default class IssuesService {
  private readonly axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserIssues (userId: string): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/${1}`)
      console.log(issues)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
