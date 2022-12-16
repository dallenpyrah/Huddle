import React, { useEffect, useState } from 'react'
import IUserGroupModel from '../models/IUserGroupModel'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'tailwindcss/colors'
import { useRouter } from 'next/router'
import IUserGroupsComponentProps from '../component-interfaces/IUserGroupsComponentProps'
import { appContainer } from '../../../inversify/container'
import { IGroupsService } from '../interfaces/IGroupsService'
import { TYPES } from '../../../inversify/types'

const groupsService = appContainer.get<IGroupsService>(TYPES.GroupsService)

export default function UserGroupsComponent (props: IUserGroupsComponentProps): JSX.Element {
  const [userGroups, setUserGroups] = useState<IUserGroupModel[]>([])
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const router = useRouter()

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
    if (props.userId > 0) {
      const userGroups = await groupsService.getUserGroups(props.userId)
      setUserGroups(userGroups)
      setIsStateLoaded(true)
    }
  }

  function loadUserGroupSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxGroupCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h6><Skeleton count={5}/></h6>
                </div>)
    }

    return skeletons
  }

  function navigateToGroupPage (groupId: number): void {
    void router.push(`/group/${groupId}`)
  }

  function findValidColor (userGroupModel: IUserGroupModel): string {
    return validColors.find(c => c === userGroupModel.group.color) ?? 'bg-slate-300'
  }

  useEffect(() => {
    void getUsersGroups()
  }, [])

  return (
        <div className="col-span-3">
            <h1 className="font-bold text-gray-300 text-lg ml-6 mb-5">Your Groups</h1>
            <div className="grid grid-cols-2 gap-4 ml-5 h-80">
                {isStateLoaded && userGroups.length > 0 && userGroups.map((userGroup, index) => (
                    <div key={index} onClick={() => {
                      navigateToGroupPage(userGroup.groupId)
                    }}
                         className={`${index === 2 && userGroups.length === 3 ? 'col-span-2' : 'col-span-1'} ${findValidColor(userGroup)} rounded-md p-3 text-white cursor-pointer flex justify-center items-center hover:-translate-y-1.5`}>
                        <h1 className="truncate text-center">{userGroup.group.name}</h1>
                    </div>
                ))}
                {isStateLoaded && userGroups.length === 0 && (
                    <div className="col-span-2 bg-black rounded-md p-3 flex text-white justify-center items-center">
                        <h6>You are not a member of any groups</h6>
                    </div>
                )}
                {!isStateLoaded && loadUserGroupSkeletons()}
            </div>
        </div>
  )
}
