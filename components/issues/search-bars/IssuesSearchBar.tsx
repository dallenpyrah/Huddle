import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import IssueModel from '../../../models/issue/IssueModel'
import { axiosService } from '../../../services/axios/AxiosService'
import IssuesService from '../../../services/issue/IssuesService'

interface IssuesSearchBarProps {
  issues: IssueModel[]
  setIssues: (issues: IssueModel[]) => void
}

export default function IssuesSearchBar (props: IssuesSearchBarProps): JSX.Element {
  const issuesService = new IssuesService(axiosService)
  const [searchTerm, setSearchTerm] = React.useState('')

  const searchForIssues = async (event: any): Promise<void> => {
    try {
      event.preventDefault()
      if (searchTerm.length > 0) {
        const issues = await issuesService.getFilteredCommunityIssues(searchTerm)
        console.log(issues)
        props.setIssues(issues)
      } else {
        const limit = 5
        const afterId = 1
        const issues = await issuesService.getCommunityIssues(limit, afterId)
        props.setIssues(issues)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={searchForIssues}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="flex flex-row">
                    <input onChange={(event) => setSearchTerm(event.target.value)} type="search" id="default-search" className="p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-200 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for an issue..." />
                    <button type="submit" className="ml-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-300 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                        <FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
        </div>
  )
}
