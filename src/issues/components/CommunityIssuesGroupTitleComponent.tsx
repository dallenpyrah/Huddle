import IssueModel from '../models/IIssueModel'
import React, { useState } from 'react'
import { appContainer } from '../../../inversify/container'
import { TYPES } from '../../../inversify/types'
import { IIssueOrderingService } from '../service-interfaces/IIssueOrderingService'

interface CommunityIssuesGroupTitleProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
  focusHeader: string
  setFocusHeader: (color: string) => void
}

const issueOrderingService = appContainer.get<IIssueOrderingService>(TYPES.IssueOrderingService)

export default function CommunityIssuesGroupTitleComponent (props: CommunityIssuesGroupTitleProps): JSX.Element {
  const [sortOrder, setSortOrder] = useState('descending')
  const [focusColor, setFocusColor] = useState('')

  function orderByGroupName (): void {
    const newFocusColor = 'bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white'
    setFocusColor(newFocusColor)
    props.setFocusHeader('group')
    const sortedIssues = issueOrderingService.orderIssuesByGroupName([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setSortOrder(newSortOrder)
    props.setIssues(sortedIssues)
  }

  return (
        <>
            <h1 className="text-md ml-6 text-white" onClick={() => orderByGroupName()}>
        <span
            className={`${props.focusHeader === 'group' ? focusColor : ''} cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text`}>
          Group
        </span>
            </h1>
        </>
  )
}
