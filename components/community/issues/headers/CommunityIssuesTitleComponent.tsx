import IssueModel from '../../../../models/issue/IIssueModel'
import IssuesService from '../../../../services/issue/IssuesService'
import { axiosService } from '../../../../services/axios/AxiosService'
import React, { useState } from 'react'

interface IssueTitleProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
  focusHeader: string
  setFocusHeader: (color: string) => void
}

export default function IssueTitle (props: IssueTitleProps): JSX.Element {
  const issuesService = new IssuesService(axiosService)
  const [sortOrder, setSortOrder] = useState('descending')
  const [focusColor, setFocusColor] = useState('')
  const newFocusColor = 'bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white'

  function orderByTitle (): void {
    const sortedIssues = issuesService.orderIssuesByTitle([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setFocusColor(newFocusColor)
    props.setFocusHeader('title')
    props.setIssues(sortedIssues)
    setSortOrder(newSortOrder)
  }

  return (
    <>
      <h1 className="text-md ml-5 text-white" onClick={() => orderByTitle()}>
        <span className={`${props.focusHeader === 'title' ? focusColor : ''} cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text`}>
          Title
        </span>
      </h1>
    </>
  )
}
