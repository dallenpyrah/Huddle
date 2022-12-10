import GroupDetailsGridHeader from './GroupDetailsGridHeader'
import React, { useEffect } from 'react'
import GroupDetailsGridItem from './GroupDetailsGridItem'
import { User } from 'firebase/auth'
import IssueModel from '../../issues/models/IIssueModel'
import { axiosService } from '../../utils/services/AxiosService'
import GroupsService from '../services/GroupsService'

interface IGroupDetailsGridProps {
  user: User | null | undefined
  groupId: number | undefined
  isStateLoaded: boolean
}

export default function GroupDetailsGrid (props: IGroupDetailsGridProps): JSX.Element {
  const [issues, setIssues] = React.useState<IssueModel[]>([])
  const groupsService = new GroupsService(axiosService)

  async function getIssuesByGroupId (): Promise<void> {
    const issues = await groupsService.getIssuesByGroupId(props.groupId)
    setIssues(issues)
  }

  useEffect(() => {
    void getIssuesByGroupId()
  }, [props.groupId])

  return (
        <div className={'col-span-9 bg-black rounded-lg'}>
            <GroupDetailsGridHeader/>
            {issues.length >= 1 && issues.map((issue, index) => (
                <GroupDetailsGridItem key={index} issue={issue}/>
            ))}
        </div>
  )
}
