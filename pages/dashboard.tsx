import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import HelloUserHeader from '../src/utils/components/HelloUserHeader'
import UserGroupsComponent from '../src/groups/components/UserGroupsComponent'
import UserNotificationsComponent from '../src/notifications/components/UserNotificationsComponent'
import UserIssuesComponent from '../src/issues/components/UserIssuesComponent'
import DashboardButtons from '../src/utils/components/DashboardButtons'
import CommunityIssuesComponent from '../src/issues/components/CommunityIssuesComponent'
import SideBarComponent from '../src/utils/components/SideBarComponent'
import { useAuth } from '../src/auth/contexts/AuthUserContext'

export default function DashboardPage (): JSX.Element {
  const { authUser, loading, userId } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && authUser === null) {
      void router.push('/login')
    }
  }, [authUser, loading, userId])

  if (!loading) {
    return (
            <div className="grid grid-cols-7 bg-zinc-900">
                <div className="hidden xl:block xl:col-span-1">
                    <SideBarComponent/>
                </div>
                <div className="col-span-7 xl:col-span-6 mr-8 mb-10">
                    <div className="grid grid-cols-9">
                        <div className="col-span-5">
                            <HelloUserHeader name={authUser?.displayName}/>
                        </div>
                        <div className={'col-span-4 mr-8'}>
                            <DashboardButtons/>
                        </div>
                        <UserGroupsComponent user={authUser} userId={userId}/>
                        <div className="col-span-3">
                            <div className="col-span-1">
                                <h1 className="font-bold text-lg ml-7 mb-5 text-gray-300">Notifications</h1>
                            </div>
                            <UserNotificationsComponent user={authUser} userId={userId}/>
                        </div>
                        <div className="col-span-3">
                            <div className="col-span-1">
                                <h1 className="font-bold text-lg ml-7 mb-5 text-gray-300">Your Issues</h1>
                            </div>
                            <UserIssuesComponent user={authUser} userId={userId}/>
                        </div>
                        <CommunityIssuesComponent user={authUser} userId={userId}/>
                    </div>
                </div>
            </div>
    )
  } else {
    return <div className="grid grid-cols-7 bg-zinc-900"></div>
  }
}
