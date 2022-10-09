import React, { useEffect, useState } from 'react'
import IssueModel from '../../models/IssueModel'
import IssuesService from '../../services/IssuesService'
import { axiosService } from '../../services/AxiosService'
import Skeleton from 'react-loading-skeleton'
import AuthenticationService from '../../services/AuthenticationService'

export default function UserIssuesComponent (): JSX.Element {
  const [issues, setIssues] = useState([] as IssueModel[])
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const issuesService = new IssuesService(axiosService)
  const authenticationService = new AuthenticationService(axiosService)
  const maxIssuesCount = 7

  async function getUsersIssues (): Promise<void> {
    const user = await authenticationService.getCurrentUser()
    if (user !== null) {
      const issues = await issuesService.getUserIssues(user.uid)
      setIssues(issues)
      setIsStateLoaded(true)
    }
  }

  function loadIssueSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxIssuesCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mt-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-black truncate"><Skeleton /></h6>
                </div>)
    }

    return skeletons
  }

  useEffect(() => {
    void getUsersIssues()
  }, [])

  return (
        <>
            {isStateLoaded && issues.map((issue, index) => (
                <div key={index} className="col-span-1 bg-red-500 rounded-md hover:translate-x-1 hover:border-l-4 mb-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-white truncate">{issue.title}</h6>
                </div>
            ))}
            {!isStateLoaded && loadIssueSkeletons()}
        </>
  )
}
