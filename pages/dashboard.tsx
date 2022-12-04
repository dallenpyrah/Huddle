import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import HelloUserHeader from '../components/dashboard/headers/HelloUserHeader'
import UserGroupsComponent from '../components/user-groups/UserGroupsComponent'
import UserNotificationsComponent from '../components/user-notifications/UserNotificationsComponent'
import UserIssuesComponent from '../components/user-issues/UserIssuesComponent'
import DashboardButtons from '../components/dashboard/DashboardButtons'
import CommunityIssuesComponent from '../components/community/issues/CommunityIssuesComponent'
import SideBarComponent from '../components/navigation/SideBarComponent'
import { useAuth } from '../context/AuthUserContext'

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
                          <div className="grid grid-cols-1 h-80 ml-7">
                              <div className="col-span-1 bg-black rounded-md">
                                  <div className="grid grid-cols-1 gap-1 p-3">
                                      <UserNotificationsComponent user={authUser} userId={userId}/>
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
                                  <UserIssuesComponent user={authUser} userId={userId}/>
                              </div>
                          </div>
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
