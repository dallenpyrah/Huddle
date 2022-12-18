import React, { useEffect, useState } from 'react'
import IssueModel from '../models/IIssueModel'
import Skeleton from 'react-loading-skeleton'
import { User } from 'firebase/auth'
import { appContainer } from '../../../inversify/container'
import { IIssuesService } from '../service-interfaces/IIssuesService'
import { TYPES } from '../../../inversify/types'

interface UserIssuesComponentProps {
  user: User | null
  userId: number
}

export const validColors = [
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

const issuesService = appContainer.get<IIssuesService>(TYPES.IssuesService)

export default function UserIssuesComponent (props: UserIssuesComponentProps): JSX.Element {
  const [issues, setIssues] = useState<IssueModel[]>([])
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const maxIssuesCount = 7

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
                <div key={i}
                     className="col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mt-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-black truncate"><Skeleton baseColor="gray"/></h6>
                </div>)
    }

    return skeletons
  }

  useEffect(() => {
    void getUsersIssues()
  }, [])

  return (
        <div className="grid grid-cols-1 h-80 ml-7">
            <div className="col-span-1 gap-1">
                <div className="col-span-1 gap-1 bg-black h-[20rem] rounded overflow-y-auto">
                    {isStateLoaded && issues.map((issue, index) => (
                        <div key={index} className={'col-span-1 my-2 p-2 mx-2 rounded hover:bg-zinc-900'}>
                            <div>
                                <span className="text-gray-300 truncate text-sm">{issue.title}</span>
                            </div>
                            <div>
                                <span
                                    className={`text-xs text-gray-600 rounded p-1 mt-1 ${issue.group.color}`}>{issue.group.name}</span>
                                <span
                                    className={`text-xs rounded p-1 float-right mt-1 ${issue.status === 'OPEN' ? 'bg-green-300' : ''}`}>{issue.status}</span>
                            </div>
                        </div>
                    ))}
                    {isStateLoaded && issues.length === 0 &&
                        <div className="col-span-2 bg-black rounded-md p-3 flex text-white justify-center items-center">
                            <h6>You have not created any issues.</h6>
                        </div>
                    }
                    {!isStateLoaded && loadIssueSkeletons()}
                </div>
            </div>
        </div>
  )
}
