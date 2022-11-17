import React, { useEffect, useState } from 'react'
import GroupsService from '../../services/group/GroupsService'
import { axiosService } from '../../services/axios/AxiosService'
import Skeleton from 'react-loading-skeleton'
import { User } from 'firebase/auth'
import IGroupModel from '../../models/group/IGroupModel'

interface NewGroupsComponentProps {
  user: User | null
}

export default function NewGroupsComponent (props: NewGroupsComponentProps): JSX.Element {
  const groupsService = new GroupsService(axiosService)
  const [newGroups, setNewGroups] = useState<IGroupModel[]>([])
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

  async function getNewestGroups (): Promise<void> {
    if (props.user !== null) {
      const newGroups = await groupsService.getNewestGroups()
      setNewGroups(newGroups)
      setIsStateLoaded(true)
    }
  }

  function loadNewGroupSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxGroupCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h6><Skeleton count={5} /></h6>
                </div>)
    }

    return skeletons
  }

  function findValidColor (group: IGroupModel): string {
    return validColors.find(c => c === group.color) ?? 'bg-slate-300'
  }

  useEffect(() => {
    void getNewestGroups()
  }, [])

  return (
      <div className="col-span-3">
          <h1 className="font-bold text-gray-300 text-lg ml-6 mb-5">New Groups</h1>
          <div className="grid grid-cols-2 gap-4 ml-5 h-80">
              {isStateLoaded && newGroups.length > 0 && newGroups.map((group, index) => (
                  <div key={index} className={`${index === 2 && newGroups.length === 3 ? 'col-span-2' : 'col-span-1'} ${findValidColor(group)} rounded-md p-3 text-white cursor-pointer flex justify-center items-center hover:-translate-y-1.5`}>
                      <h1 className="truncate text-center">{group.name}</h1>
                  </div>
              ))}
              {isStateLoaded && newGroups.length === 0 && loadNewGroupSkeletons()}
              {!isStateLoaded && loadNewGroupSkeletons()}
          </div>
      </div>
  )
}
