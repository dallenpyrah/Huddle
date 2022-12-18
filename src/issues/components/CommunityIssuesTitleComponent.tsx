import IssueModel from '../models/IIssueModel'
import React, { useState } from 'react'
import { appContainer } from '../../../inversify/container'
import { TYPES } from '../../../inversify/types'
import { IIssueOrderingService } from '../service-interfaces/IIssueOrderingService'

interface IssueTitleProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
  focusHeader: string
  setFocusHeader: (color: string) => void
}

const issueOrderingService = appContainer.get<IIssueOrderingService>(TYPES.IssueOrderingService)

export default function IssueTitle (props: IssueTitleProps): JSX.Element {
  const [sortOrder, setSortOrder] = useState('descending')
  const [focusColor, setFocusColor] = useState('')
  const newFocusColor = 'bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white'

  function orderByTitle (): void {
    const sortedIssues = issueOrderingService.orderIssuesByTitle([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setFocusColor(newFocusColor)
    props.setFocusHeader('title')
    props.setIssues(sortedIssues)
    setSortOrder(newSortOrder)
  }

  return (
        <>
            <h1 className="text-md ml-6 text-white" onClick={() => orderByTitle()}>
        <span
            className={`${props.focusHeader === 'title' ? focusColor : ''} cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text`}>
          Title
        </span>
            </h1>
        </>
  )
}
