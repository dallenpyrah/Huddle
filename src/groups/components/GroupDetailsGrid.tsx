import GroupDetailsGridHeader from './GroupDetailsGridHeader'
import React, { useEffect } from 'react'
import GroupDetailsGridItem from './GroupDetailsGridItem'
import { User } from 'firebase/auth'
import IssueModel from '../../issues/models/IIssueModel'
import { IGroupsService } from '../interfaces/IGroupsService'
import { appContainer } from '../../../inversify/container'
import { TYPES } from '../../../inversify/types'

interface IGroupDetailsGridProps {
  user: User | null | undefined
  groupId: number | undefined
  isStateLoaded: boolean
}

const groupsService = appContainer.get<IGroupsService>(TYPES.GroupsService)

export default function GroupDetailsGrid (props: IGroupDetailsGridProps): JSX.Element {
  const [issues, setIssues] = React.useState<IssueModel[]>([])

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
