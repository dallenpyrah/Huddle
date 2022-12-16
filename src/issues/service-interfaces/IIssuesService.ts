import IIssueModel from '../models/IIssueModel'

export interface IIssuesService {
  getUserIssues: (userId: number) => Promise<IIssueModel[]>
  getCommunityIssues: (limit: number, afterId: number) => Promise<IIssueModel[]>
  getFilteredCommunityIssues: (filter: string) => Promise<IIssueModel[]>
  createIssue: (newIssue: IIssueModel) => Promise<IIssueModel>
}
