import React, { useState } from 'react'
import { User } from 'firebase/auth'
import GroupsService from '../services/GroupsService'
import { axiosService } from '../services/AxiosService'

interface CommunityIssuesComponentProps {
  user: User | null
}

export default function GroupListComponent (props: CommunityIssuesComponentProps): JSX.Element {
  const [groups, setGroups] = useState()
  const groupsService = new GroupsService(axiosService)

  async function getAllGroups (): void {
    const groups = groupsService.getCommunityGroups()
  }

  return (
        <div>

        </div>
  )
}
