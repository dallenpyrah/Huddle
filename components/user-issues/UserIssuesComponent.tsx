import React, { useEffect, useState } from 'react'
import IssueModel from '../../models/issue/IIssueModel'
import IssuesService from '../../services/issue/IssuesService'
import { axiosService } from '../../services/axios/AxiosService'
import Skeleton from 'react-loading-skeleton'
import { User } from 'firebase/auth'

interface UserIssuesComponentProps {
  user: User | null
  userId: number
}

export default function UserIssuesComponent (props: UserIssuesComponentProps): JSX.Element {
  const [issues, setIssues] = useState<IssueModel[]>([])
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const issuesService = new IssuesService(axiosService)
  const maxIssuesCount = 7
  const validColors = [
    'bg-slate-300',
    'bg-red-300',
    'bg-orange-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-teal-300',
    'bg-blue-300',
    'bg-indigo-300',
    'bg-purple-300',
    'bg-pink-300'
  ]

  async function getUsersIssues (): Promise<void> {
    if (props.userId > 0) {
      const issues = await issuesService.getUserIssues(props.userId)
      setIssues(issues)
      setIsStateLoaded(true)
    }
  }

  function loadIssueSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxIssuesCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mt-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-black truncate"><Skeleton baseColor="gray" /></h6>
                </div>)
    }

    return skeletons
  }

  function findValidColor (issue: IssueModel): string {
    return validColors.find(c => c === issue.group.color) ?? 'bg-slate-300'
  }

  useEffect(() => {
    void getUsersIssues()
  }, [])

  return (
        <>
            {isStateLoaded && issues.map((issue, index) => (
                <div key={index} className={`${findValidColor(issue)} col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mb-2 hover:border-purple-200`}>
                    <h6 className="p-2 text-sm text-white truncate">{issue.title}</h6>
                </div>
            ))}
            {isStateLoaded && issues.length === 0 &&
                <div className="col-span-1 bg-red-500 rounded-md hover:translate-x-1 hover:border-l-4 mb-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-white truncate">No issues found.</h6>
                </div>
            }
            {!isStateLoaded && loadIssueSkeletons()}
        </>
  )
}
