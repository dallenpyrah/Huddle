import React, { useEffect, useState } from 'react'
import { axiosService } from '../../services/AxiosService'
import GroupsService from '../../services/GroupsService'
import UserGroupModel from '../../models/UserGroupModel'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'tailwindcss/colors'
import { User } from 'firebase/auth'

interface UserGroupsComponentProps {
  user: User | null
}

export default function UserGroupsComponent (props: UserGroupsComponentProps): JSX.Element {
  const groupsService = new GroupsService(axiosService)
  const [userGroups, setUserGroups] = useState<UserGroupModel[]>([])
  const [isStateLoaded, setIsStateLoaded] = useState(false)

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
  const maxGroupCount = 4

  async function getUsersGroups (): Promise<void> {
    if (props.user !== null) {
      const userGroups = await groupsService.getUserGroups(props.user.uid)
      setUserGroups(userGroups)
      setIsStateLoaded(true)
    }
  }

  function loadUserGroupSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxGroupCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h6><Skeleton count={5} /></h6>
                </div>)
    }

    return skeletons
  }

  useEffect(() => {
    void getUsersGroups()
  }, [])

  return (
        <>
            {isStateLoaded && userGroups.length > 0 && userGroups.map((userGroup, index) => (
                        <div key={index} className={`${index === 2 && userGroups.length === 3 ? 'col-span-2' : 'col-span-1'} ${validColors.find(c => c === userGroup.group.color)} rounded-md p-3 text-white cursor-pointer flex justify-center items-center hover:-translate-y-1.5`}>
                            <h1 className="truncate text-center">{userGroup.group.name}</h1>
                        </div>
            ))}
            {isStateLoaded && userGroups.length === 0 && loadUserGroupSkeletons()}
            {!isStateLoaded && loadUserGroupSkeletons()}
        </>
  )
}
