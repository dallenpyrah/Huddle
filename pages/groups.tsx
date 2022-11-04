import SideBarComponent from '../components/SideBarComponent'
import React, { useEffect, useState } from 'react'
import UserGroupsComponent from '../components/UserGroupsComponent'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../firebase-config'
import CommunityIssuesComponent from '../components/CommunityIssuesComponent'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardButtons from '../components/DashboardButtons'
import NewGroupsComponent from '../components/NewGroupsComponent'

export default function GroupsPage (): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  function getUser (): void {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user)
        setLoading(false)
      } else {
        void router.push('/login')
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  if (loading) {
    return (
            <div className="flex bg-zinc-900 h-screen w-screen justify-evenly items-center">
            </div>
    )
  } else {
    return (
            <div className="grid grid-cols-7 bg-zinc-900">
                <div className="hidden xl:block xl:col-span-1">
                    <SideBarComponent/>
                </div>
                <div className="col-span-7 xl:col-span-6 mr-8">
                    <div className="grid grid-cols-9">
                        <div className="col-span-5 mt-7 mb-5">
                            <span className={'text-white text-2xl font-bold mr-3 p-6'}>Groups</span>
                            <button className={'bg-black text-white px-2 py-1 rounded'}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        <DashboardButtons />
                        <UserGroupsComponent user={user} />
                        <div className={'col-span-3'}>
                        </div>
                        <div className={'col-span-3'}>
                            <NewGroupsComponent user={user} />
                        </div>
                        <div className={'col-span-9 bg-black h-[31rem] ml-4 mt-8 rounded-lg'}>
                            <div className={'grid grid-cols-9'}>
                                <div className={'col-span-5 p-8'}>
                                    <span className={'text-lg text-white font-semibold'}>Community Groups</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
