import IssueModel from '../models/IssueModel'
import IssuesService from '../services/IssuesService'
import { axiosService } from '../services/AxiosService'
import React, { useState } from 'react'

interface CommunityIssuesLanguageComponentProps {
  issues: IssueModel[]
  setIssues: (issue: IssueModel[]) => void
  focusHeader: string
  setFocusHeader: (color: string) => void
}

export default function CommunityIssuesLanguageComponent (props: CommunityIssuesLanguageComponentProps): JSX.Element {
  const issuesService = new IssuesService(axiosService)
  const [sortOrder, setSortOrder] = useState('descending')
  const [focusColor, setFocusColor] = useState('')

  function orderByLanguage (): void {
    const newFocusColor = 'bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white'
    setFocusColor(newFocusColor)
    props.setFocusHeader('language')
    const sortedIssues = issuesService.orderIssuesByLanguage([...props.issues], sortOrder)
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending'
    setSortOrder(newSortOrder)
    props.setIssues(sortedIssues)
  }

  return (
        <>
            <h1 className="text-md ml-5 text-white" onClick={() => orderByLanguage()}>
                <span className={`${props.focusHeader === 'language' ? focusColor : ''} cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text`}>
                    Language
                </span>
            </h1>
        </>
  )
}
