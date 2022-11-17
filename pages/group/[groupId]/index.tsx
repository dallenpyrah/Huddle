import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../../../firebase-config'
import SideBarComponent from '../../../components/navigation/SideBarComponent'
import GroupsService from '../../../services/group/GroupsService'
import { axiosService } from '../../../services/axios/AxiosService'
import GroupModel from '../../../models/group/IGroupModel'
import UserGroupsService from '../../../services/user-group/UserGroupsService'
import UserGroupModel from '../../../models/user-group/IUserGroupModel'
import { faChessKing, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupDetailsGrid from '../../../components/groups/grid/GroupDetailsGrid'

export default function GroupDetailsPage (): JSX.Element {
  const [user, setUser] = useState<User>()
  const [groupMembers, setGroupMembers] = useState<UserGroupModel[]>([])
  const [group, setGroup] = useState<GroupModel>()
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const groupsService = new GroupsService(axiosService)
  const userGroupsService = new UserGroupsService(axiosService)
  const router = useRouter()
  const groupId = parseInt(router.query.groupId as string, 10)

  function getUser (): void {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user)
      } else {
        void router.push('/login')
      }
    })
  }

  async function getGroupById (): Promise<void> {
    const group = await groupsService.getGroupById(groupId)
    setGroup(group)
    setIsStateLoaded(true)
  }

  async function getUsersByGroupId (): Promise<void> {
    const groupMembers = await userGroupsService.getUsersByGroupId(groupId)
    console.log(groupMembers)
    setGroupMembers(groupMembers)
  }

  function navigateToCreateIssue (): void {
    void router.push(`/group/${groupId}/create-issue`)
  }

  useEffect(() => {
    if (groupId === undefined || groupId === null || isNaN(groupId)) {
      return
    }

    getUser()
    void getGroupById()
    void getUsersByGroupId()
  }, [groupId])

  if (isStateLoaded) {
    return (
        <div className="grid grid-cols-7 bg-zinc-900 h-screen">
          <div className="hidden xl:block xl:col-span-1">
            <SideBarComponent/>
          </div>
          <div className="col-span-7 xl:col-span-6 bg-black mt-8 mb-8 mr-8 ml-8 xl:ml-0 rounded-lg">
            <div className="grid grid-cols-9">
              <div className="col-span-3 ml-7">
                <div className="text-zinc-300 mt-5 font-bold text-xl">{group?.name}
                  <h1
                      className="bg-blue-100 text-blue-800 ml-5 mt-1 mb-1 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    <FontAwesomeIcon icon={faUsers} className="mr-2"/>
                    {groupMembers.length} Member<span className={groupMembers.length === 1 ? 'hidden' : ''}>s</span>
                  </h1>
                  <h1
                      className="bg-red-100 text-blue-800 ml-2 mt-1 mb-1 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    <FontAwesomeIcon icon={faChessKing} className="mr-2"/>
                    Admin
                  </h1>
                </div>
                <h6 className="text-zinc-500 mt-1 font-light text-sm">{group?.description}</h6>
              </div>
              <div className="col-span-3 col-start-7 text-right">
                <button className="bg-blue-400 text-zinc-200 font-normal text-sm rounded-md px-4 py-2 mt-5 mr-2" onClick={navigateToCreateIssue}>New Issue</button>
                {user?.uid === group?.fireBaseUserId
                  ? <button className="bg-zinc-500 text-zinc-200 font-normal text-sm rounded-md px-4 py-2 mt-5 mr-5">Join Group</button>

                  : <button className="bg-red-500 text-zinc-200 font-normal text-sm rounded-md px-4 py-2 mt-5 mr-5">Leave Group</button>
                }
              </div>
              <GroupDetailsGrid user={user} groupId={groupId} isStateLoaded={isStateLoaded} />
            </div>
          </div>
        </div>
    )
  } else {
    return (
        <div className="grid grid-cols-7 bg-zinc-900">
          <div className="hidden xl:block xl:col-span-1">
            <SideBarComponent/>
          </div>
        </div>
    )
  }
}
