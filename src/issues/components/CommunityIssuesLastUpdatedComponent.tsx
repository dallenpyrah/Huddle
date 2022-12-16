import IssueModel from '../models/IIssueModel'
import IssuesService from '../services/IssuesService'
import React, { useState } from 'react'
import { appContainer } from '../../../inversify/container'
import { IIssueOrderingService } from '../service-interfaces/IIssueOrderingService'
import { TYPES } from '../../../inversify/types'

interface CommunityIssuesLastUpdatedComponentProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
  focusHeader: string
  setFocusHeader: (color: string) => void
}

const issueOrderingService = appContainer.get<IIssueOrderingService>(TYPES.IssueOrderingService)

export default function CommunityIssuesLastUpdatedComponent (props: CommunityIssuesLastUpdatedComponentProps): JSX.Element {
  const [sortOrder, setSortOrder] = useState('descending')
  const [focusColor, setFocusColor] = useState('')

  function orderByLastUpdated (): void {
    const newFocusColor = 'bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white'
    setFocusColor(newFocusColor)
    props.setFocusHeader('lastUpdated')
    const sortedIssues = issueOrderingService.orderIssuesByLastUpdated([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setSortOrder(newSortOrder)
    props.setIssues(sortedIssues)
  }

  return (
        <>
            <h1 className="text-md ml-4 text-white" onClick={() => orderByLastUpdated()}>
                <span
                    className={`${props.focusHeader === 'lastUpdated' ? focusColor : ''} cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text`}>
                    Last Updated
                </span>
            </h1>
        </>
  )
}
