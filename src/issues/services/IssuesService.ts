import { AxiosInstance } from 'axios'
import pino from 'pino'
import IIssueModel from '../models/IIssueModel'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import type { IAxiosService } from '../../auth/service-interfaces/IAxiosService'
import { IIssuesService } from '../service-interfaces/IIssuesService'

@injectable()
export class IssuesService implements IIssuesService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async getUserIssues (userId: number): Promise<IIssueModel[]> {
    try {
      const issues = await this.axios.get<IIssueModel[]>(`/issues/${userId}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCommunityIssues (limit: number, afterId: number): Promise<IIssueModel[]> {
    try {
      const issues = await this.axios.get<IIssueModel[]>(`/issues/${limit}/${afterId}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getFilteredCommunityIssues (filter: string): Promise<IIssueModel[]> {
    try {
      const issues = await this.axios.get<IIssueModel[]>(`/issues/${filter}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async createIssue (newIssue: IIssueModel): Promise<IIssueModel> {
    try {
      const issue = await this.axios.post<IIssueModel>('/issues', newIssue)
      return issue.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
