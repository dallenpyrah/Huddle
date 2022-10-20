import IssueModel from '../../models/IssueModel'
import IssuesService from '../../services/IssuesService'
import { axiosService } from '../../services/AxiosService'
import React, { useState } from 'react'

interface IssueTitleProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
}

export default function IssueTitle (props: IssueTitleProps): JSX.Element {
  const issuesService = new IssuesService(axiosService)
  const [sortOrder, setSortOrder] = useState('descending')

  function orderByTitle (): void {
    const sortedIssues = issuesService.orderIssuesByTitle([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setSortOrder(newSortOrder)
    props.setIssues(sortedIssues)
  }

  return (
        <>
            <h1 className="text-md ml-5 text-white" onClick={() => orderByTitle()}>
        <span className='cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text'>
          Title
        </span>
            </h1>
        </>
  )
}
