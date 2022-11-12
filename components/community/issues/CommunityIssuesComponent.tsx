import IssuesSearchBar from '../../issues/search-bars/IssuesSearchBar'
import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import Skeleton from 'react-loading-skeleton'
import IssueModel from '../../../models/issue/IssueModel'
import IssuesService from '../../../services/issue/IssuesService'
import { axiosService } from '../../../services/axios/AxiosService'
import CommunityIssuesTitleComponent from './headers/CommunityIssuesTitleComponent'
import CommunityIssuesGroupTitleComponent from './headers/CommunityIssuesGroupTitleComponent'
import CommunityIssuesLanguageComponent from './headers/CommunityIssuesLanguageComponent'
import CommunityIssuesLastUpdatedComponent from './headers/CommunityIssuesLastUpdatedComponent'

interface CommunityIssuesComponentProps {
  user: User | null
}

export default function CommunityIssuesComponent (props: CommunityIssuesComponentProps): JSX.Element {
  const maxIssuesCount = 5
  const issuesService = new IssuesService(axiosService)
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const [issues, setIssues] = useState<IssueModel[]>([])
  const [focusHeader, setFocusHeader] = useState('')

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

  async function getCommunityIssues (): Promise<void> {
    if (props.user !== null) {
      const limit = 5
      const afterId = 1
      const issues = await issuesService.getCommunityIssues(limit, afterId)
      issues.length = 5
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
                        <h1 className="text-sm text-gray-300 ml-5 m-2"><Skeleton count={1} baseColor="black" /> </h1>
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
      <div className="bg-black rounded-lg p-3 m-5">
            <div className="grid grid-cols-9">
                <div className="col-span-6 mt-5 ml-4 mb-4">
                    <h1 className="text-white text-lg font-bold">Community Issues</h1>
                </div>
                <div className="col-span-3 mt-4 mb-4 mr-2">
                    <IssuesSearchBar issues={issues} setIssues={setIssues} />
                </div>
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <CommunityIssuesTitleComponent issues={issues} setIssues={setIssues} focusHeader={focusHeader} setFocusHeader={setFocusHeader} />
                </div>
                <div className="col-span-1">
                    <CommunityIssuesGroupTitleComponent issues={issues} setIssues={setIssues} focusHeader={focusHeader} setFocusHeader={setFocusHeader} />
                </div>
                <div className="col-span-1">
                    <CommunityIssuesLanguageComponent issues={issues} setIssues={setIssues} focusHeader={focusHeader} setFocusHeader={setFocusHeader} />
                </div>
                <div className="col-span-1">
                    <CommunityIssuesLastUpdatedComponent issues={issues} setIssues={setIssues} focusHeader={focusHeader} setFocusHeader={setFocusHeader} />
                </div>
            </div>
            {isStateLoaded && issues.length > 0 && issues.map((issue, index) => (
                <div key={index} className="grid grid-cols-4 mt-1 pt-1 pb-1 hover:bg-zinc-900 hover:rounded-lg">
                    <div className="col-span-1">
                        <h1 className="text-sm text-gray-300 ml-5 m-2">{issue.title}</h1>
                        <p className="text-xs text-gray-400 ml-5 m-2">{issue.user.name}</p>
                    </div>
                    <div className="col-span-1 mt-3">
                        <span className={`${validColors.find(c => c === issue.group.color)} text-xs ml-5 mt-1 font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600 last:mr-0 mr-1`}>
                            {issue.group.name}
                        </span>
                    </div>
                    <div className="col-span-1 mt-3">
                        <span className="text-xs ml-5 mt-1 font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 last:mr-0 mr-1">
                            {issue.language}
                        </span>
                    </div>
                    <div className="col-span-1 mt-3">
                        <h1 className="text-sm text-gray-300 ml-5 m-2 text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{issue.updatedAt.toString().substring(0, 10)}</h1>
                    </div>
                </div>
            ))}
            {isStateLoaded && issues.length === 0 &&
                <div className="grid grid-cols-4 mt-1 pt-1 pb-1 hover:bg-zinc-900 hover:rounded-lg">
                    <div className="col-span-1">
                        <h1 className="text-sm text-gray-300 ml-5 m-2">No issues found</h1>
                    </div>
                </div>
            }
            {!isStateLoaded && loadCommunityIssuesSkeletons()}

        </div>
  )
}
