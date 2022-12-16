import IIssueModel from '../models/IIssueModel'

export interface IIssueOrderingService {
  orderIssuesByTitle: (issues: IIssueModel[], sortOrder: string) => IIssueModel[]

  orderIssuesByGroupName: (issues: IIssueModel[], sortOrder: string) => IIssueModel[]

  orderIssuesByLanguage: (issues: IIssueModel[], sortOrder: string) => IIssueModel[]

  orderIssuesByLastUpdated: (issues: IIssueModel[], sortOrder: string) => IIssueModel[]

  orderIssuesByLanguageAscending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByLanguageDescending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByTitleAscending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByTitleDescending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByGroupNameAscending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByGroupNameDescending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByLastUpdatedAscending: (issues: IIssueModel[]) => IIssueModel[]

  orderIssuesByLastUpdatedDescending: (issues: IIssueModel[]) => IIssueModel[]
}
