import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../firebase-config'
import HelloUserHeader from '../components/dashboard/headers/HelloUserHeader'
import UserGroupsComponent from '../components/user-groups/UserGroupsComponent'
import UserNotificationsComponent from '../components/user-notifications/UserNotificationsComponent'
import UserIssuesComponent from '../components/user-issues/UserIssuesComponent'
import DashboardButtons from '../components/dashboard/DashboardButtons'
import CommunityIssuesComponent from '../components/community/issues/CommunityIssuesComponent'
import SideBarComponent from '../components/navigation/SideBarComponent'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

export default function DashboardTestPage (): JSX.Element {
  const queryClient = new QueryClient()
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
        <QueryClientProvider client={queryClient}>
            <div className="grid grid-cols-7 bg-zinc-900">
                <div className="hidden xl:block xl:col-span-1">
                    <SideBarComponent/>
                </div>
                <div className="col-span-7 xl:col-span-6 mr-8 mb-10">
                    <div className="grid grid-cols-9 max-h-screen">
                        <div className="col-span-5">
                            <HelloUserHeader name={user?.displayName}/>
                        </div>
                        <div className={'col-span-4 mr-8'}>
                            <DashboardButtons/>
                        </div>
                           <UserGroupsComponent user={user}/>
                        <div className="col-span-3">
                            <div className="col-span-1">
                                <h1 className="font-bold text-lg ml-7 mb-5 text-gray-300">Notifications</h1>
                            </div>
                            <div className="grid grid-cols-1 h-80 ml-7">
                                <div className="col-span-1 bg-black rounded-md">
                                    <div className="grid grid-cols-1 gap-1 p-3">
                                        <UserNotificationsComponent user={user}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="col-span-1">
                                <h1 className="font-bold text-lg ml-7 mb-5 text-gray-300">Your Issues</h1>
                            </div>
                            <div className="grid grid-cols-1 h-80 ml-7">
                                <div className="col-span-1 gap-1">
                                    <UserIssuesComponent user={user}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-9 bg-black h-[31rem] ml-4 mt-7 rounded-lg mb-10">
                            <CommunityIssuesComponent user={user}/>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
  }
}
