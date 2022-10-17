import IssuesSearchBar from '../search-bars/IssuesSearchBar'
import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import Skeleton from 'react-loading-skeleton'
import IssueModel from '../../models/IssueModel'
import IssuesService from '../../services/IssuesService'
import { axiosService } from '../../services/AxiosService'

interface CommunityIssuesComponentProps {
  user: User | null
}

export default function CommunityIssuesComponent (props: CommunityIssuesComponentProps): JSX.Element {
  const maxIssuesCount = 5
  const issuesService = new IssuesService(axiosService)
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const [issues, setIssues] = useState<IssueModel[]>([])
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
  const languageColors = {
    'C#': 'bg-green-300',
    'C++': 'bg-blue-300'
  }

  async function getCommunityIssues (): Promise<void> {
    if (props.user !== null) {
      const limit = 5
      const afterId = 1
      const issues = await issuesService.getCommunityIssues(limit, afterId)
      setIssues(issues)
      setIsStateLoaded(true)
    }
  }

  function loadCommunityIssuesSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxIssuesCount; i++) {
      skeletons.push(
          <div key={i} className="grid grid-cols-4 pt-2 pb-2">
              <div className="col-span-1">
                  <h1 className="text-sm text-gray-300 ml-5 m-2"><Skeleton count={1} baseColor="black"/> </h1>
              </div>
              <div className="col-span-1 ml-5">
                  <Skeleton count={1} baseColor="black" />
              </div>
              <div className="col-span-1 ml-5">
                  <Skeleton count={1} baseColor="black" />
              </div>
              <div className="col-span-1">
                  <h1 className="text-sm text-gray-300 ml-5 m-2"><Skeleton count={1} baseColor="black" /></h1>
              </div>
          </div>
      )
    }

    return skeletons
  }

  useEffect(() => {
    void getCommunityIssues()
  }, [])

  return (
        <>
            <div className="grid grid-cols-8">
                    <div className="col-span-2">
                        <h1 className="text-white text-lg font-bold p-5">Community Issues</h1>
                    </div>
                    <div className="col-span-2 col-start-7 mt-2">
                        <IssuesSearchBar />
                    </div>
                </div>
            <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <h1 className="text-md ml-5 text-white">Title</h1>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-md ml-5 text-white">Group</h1>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-md ml-5 text-white">Language</h1>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-md ml-5 text-white">Last Updated</h1>
                    </div>
                </div>
            {isStateLoaded && issues.length > 0 && issues.map((issue, index) => (
                <div key={index} className="grid grid-cols-4 pt-2 pb-2">
                    <div className="col-span-1">
                        <h1 className="text-sm text-gray-300 ml-5 m-2">{issue.title}</h1>
                        <p className="text-xs text-gray-400 ml-5 m-2">{issue.user.name}</p>
                    </div>
                    <div className="col-span-1">
                        <span className={`${validColors.find(c => c === issue.group.color)} text-xs ml-5 mt-1 font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600 last:mr-0 mr-1`}>
                            {issue.group.name}
                        </span>
                    </div>
                    <div className="col-span-1">
                        <span className="text-xs ml-5 mt-1 font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 last:mr-0 mr-1">
                            {issue.language}
                        </span>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-sm text-gray-300 ml-5 m-2">{issue.updatedAt.toString()}</h1>
                    </div>
                </div>
            ))}
            {!isStateLoaded && loadCommunityIssuesSkeletons()}

        </>
  )
}
