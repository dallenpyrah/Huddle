import { AxiosInstance } from 'axios'
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
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/${userId}`)
      console.log(issues)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCommunityIssues (limit: number, afterId: number): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/community/${limit}/${afterId}`)
      console.log(issues)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getFilteredCommunityIssues (filter: string): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/community/${filter}`)
      console.log(issues)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  protected orderIssuesByTitleAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.title.localeCompare(b.title))
  }

  protected orderIssuesByTitleDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.title.localeCompare(a.title))
  }

  orderIssuesByTitle (issues: IssueModel[], sortOrder: string): IssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByTitleAscending(issues)
      case 'descending':
        return this.orderIssuesByTitleDescending(issues)
      default:
        return issues
    }
  }

  orderIssuesByGroupName (issues: IssueModel[], sortOrder: string): IssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByGroupNameAscending(issues)
      case 'descending':
        return this.orderIssuesByGroupNameDescending(issues)
      default:
        return issues
    }
  }

  protected orderIssuesByGroupNameAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.group.name.localeCompare(b.group.name))
  }

  protected orderIssuesByGroupNameDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.group.name.localeCompare(a.group.name))
  }
}
