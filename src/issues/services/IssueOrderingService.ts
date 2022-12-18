import IIssueModel from '../models/IIssueModel'
import { IIssueOrderingService } from '../service-interfaces/IIssueOrderingService'
import { injectable } from 'inversify'

@injectable()
export class IssueOrderingService implements IIssueOrderingService {
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

  orderIssuesByLanguageAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.language.localeCompare(b.language))
  }

  orderIssuesByLanguageDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.language.localeCompare(a.language))
  }

  orderIssuesByTitleAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.title.localeCompare(b.title))
  }

  orderIssuesByTitleDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.title.localeCompare(a.title))
  }

  orderIssuesByGroupNameAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.group.name.localeCompare(b.group.name))
  }

  orderIssuesByGroupNameDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.group.name.localeCompare(a.group.name))
  }

  orderIssuesByLastUpdatedAscending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => a.updatedAt.toString().localeCompare(b.updatedAt.toString()))
  }

  orderIssuesByLastUpdatedDescending (issues: IIssueModel[]): IIssueModel[] {
    return issues.sort((a, b) => b.updatedAt.toString().localeCompare(a.updatedAt.toString()))
  }
}
