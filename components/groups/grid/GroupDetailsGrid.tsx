import GroupDetailsGridHeader from '../headers/GroupDetailsGridHeader'
import React, { useEffect } from 'react'
import GroupDetailsGridItem from './grid-item/GroupDetailsGridItem'
import { User } from 'firebase/auth'
import IssueModel from '../../../models/issue/IssueModel'
import { axiosService } from '../../../services/axios/AxiosService'
import GroupsService from '../../../services/group/GroupsService'

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
    console.log(issues)
    setIssues(issues)
  }

  useEffect(() => {
    void getIssuesByGroupId()
  }, [props.groupId])

  return (
        <div className={'col-span-9 bg-black rounded-lg'}>
            <GroupDetailsGridHeader />
            {props.isStateLoaded && issues.length >= 1 && issues.map((issue, index) => (
                <GroupDetailsGridItem key={index} issue={issue} />
            ))}
        </div>
  )
}
