import GroupDetailsGridHeader from '../headers/GroupDetailsGridHeader'
import React from 'react'
import GroupDetailsGridItem from './grid-item/GroupDetailsGridItem'
import { User } from 'firebase/auth'

interface IGroupDetailsGridProps {
  user: User | null | undefined
}

export default function GroupDetailsGrid (props: IGroupDetailsGridProps): JSX.Element {
  async function getIssuesByGroupId (): Promise<void> {

  }

  return (
        <div className={'col-span-9 bg-black rounded-lg'}>
            <GroupDetailsGridHeader />
            <GroupDetailsGridItem />
        </div>
  )
}
