import { AxiosInstance } from 'axios'
import pino from 'pino'
import IIssueModel from '../../models/issue/IIssueModel'

export default class IssuesService {
  private readonly axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserIssues (userId: number): Promise<IIssueModel[]> {
    try {
      const issues = await this.axiosService.get<IIssueModel[]>(`/issues/${userId}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getCommunityIssues (limit: number, afterId: number): Promise<IIssueModel[]> {
    try {
      const issues = await this.axiosService.get<IIssueModel[]>(`/issues/${limit}/${afterId}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  async getFilteredCommunityIssues (filter: string): Promise<IIssueModel[]> {
    try {
      const issues = await this.axiosService.get<IIssueModel[]>(`/issues/${filter}`)
      return issues.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  orderIssuesByTitle (issues: IIssueModel[], sortOrder: string): IIssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByTitleAscending(issues)
      case 'descending':
        return this.orderIssuesByTitleDescending(issues)
      default:
        return issues
    }
  }

  orderIssuesByGroupName (issues: IIssueModel[], sortOrder: string): IIssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByGroupNameAscending(issues)
      case 'descending':
        return this.orderIssuesByGroupNameDescending(issues)
      default:
        return issues
    }
  }

  orderIssuesByLanguage (issues: IIssueModel[], sortOrder: string): IIssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByLanguageAscending(issues)
      case 'descending':
        return this.orderIssuesByLanguageDescending(issues)
      default:
        return issues
    }
  }

  orderIssuesByLastUpdated (issues: IIssueModel[], sortOrder: string): IIssueModel[] {
    switch (sortOrder) {
      case 'ascending':
        return this.orderIssuesByLastUpdatedAscending(issues)
      case 'descending':
        return this.orderIssuesByLastUpdatedDescending(issues)
      default:
        return issues
    }
  }

  protected orderIssuesByLanguageAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.language.localeCompare(b.language))
  }

  protected orderIssuesByLanguageDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.language.localeCompare(a.language))
  }

  protected orderIssuesByTitleAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.title.localeCompare(b.title))
  }

  protected orderIssuesByTitleDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.title.localeCompare(a.title))
  }

  protected orderIssuesByGroupNameAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.group.name.localeCompare(b.group.name))
  }

  protected orderIssuesByGroupNameDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.group.name.localeCompare(a.group.name))
  }

  protected orderIssuesByLastUpdatedAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.updatedAt.toString().localeCompare(b.updatedAt.toString()))
  }

  protected orderIssuesByLastUpdatedDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.updatedAt.toString().localeCompare(a.updatedAt.toString()))
  }

  async createIssue (newIssue: IIssueModel): Promise<IIssueModel> {
    try {
      const issue = await this.axiosService.post<IIssueModel>('/issues', newIssue)
      return issue.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}
