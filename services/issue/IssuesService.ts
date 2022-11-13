import { AxiosInstance } from 'axios'
import IssueModel from '../../models/issue/IssueModel'
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
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCommunityIssues (limit: number, afterId: number): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/${limit}/${afterId}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getFilteredCommunityIssues (filter: string): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/${filter}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
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

  orderIssuesByLanguage (issues: IssueModel[], sortOrder: string): IssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByLanguageAscending(issues)
      case 'descending':
        return this.orderIssuesByLanguageDescending(issues)
      default:
        return issues
    }
  }

  orderIssuesByLastUpdated (issues: IssueModel[], sortOrder: string): IssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByLastUpdatedAscending(issues)
      case 'descending':
        return this.orderIssuesByLastUpdatedDescending(issues)
      default:
        return issues
    }
  }

  protected orderIssuesByLanguageAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.language.localeCompare(b.language))
  }

  protected orderIssuesByLanguageDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.language.localeCompare(a.language))
  }

  protected orderIssuesByTitleAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.title.localeCompare(b.title))
  }

  protected orderIssuesByTitleDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.title.localeCompare(a.title))
  }

  protected orderIssuesByGroupNameAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.group.name.localeCompare(b.group.name))
  }

  protected orderIssuesByGroupNameDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.group.name.localeCompare(a.group.name))
  }

  protected orderIssuesByLastUpdatedAscending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => a.updatedAt.toString().localeCompare(b.updatedAt.toString()))
  }

  protected orderIssuesByLastUpdatedDescending (issues: IssueModel[]): IssueModel[] {
    return issues.sort((a, b) => b.updatedAt.toString().localeCompare(a.updatedAt.toString()))
  }
}
