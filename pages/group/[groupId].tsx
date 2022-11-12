import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../../firebase-config'
import SideBarComponent from '../../components/SideBarComponent'
import axios from 'axios'
import GroupsService from '../../services/GroupsService'
import { axiosService } from '../../services/AxiosService'
import GroupModel from '../../models/GroupModel'

export default function GroupDetailsPage (): JSX.Element {
  const [user, setUser] = useState<User>()
  const [group, setGroup] = useState<GroupModel>()
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const groupsService = new GroupsService(axiosService)
  const router = useRouter()

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
    const data = router.query
    const groupId = parseInt(data.groupId as string)
    const group = await groupsService.getGroupById(groupId)
    setGroup(group)
    setIsStateLoaded(true)
  }

  useEffect(() => {
    getUser()
    void getGroupById()
  }, [])

  if (isStateLoaded) {
    return (
        <div className="grid grid-cols-7 bg-zinc-900">
          <div className="hidden xl:block xl:col-span-1">
            <SideBarComponent/>
          </div>
          <div className="col-span-6 bg-black m-8 rounded-lg">
            <h1 className="text-white m-5 font-bold text-xl">{group?.name}</h1>
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
