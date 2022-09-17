import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import GroupComponent from '../components/GroupComponent';
import HelloUserHeader from '../components/headers/HelloUserHeader';
import IssuesComponent from '../components/IssuesComponent';
import NotificationsComponent from '../components/NotificationsComponent';
import IssuesSearchBar from '../components/search-bars/IssuesSearchBar';
import SideBarComponent from '../components/SideBarComponent'
import { useGlobalContext } from '../context/GlobalContext'

export default function DashboardPage() {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const [user, setUser] = useState({} as User);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const userCredentialsString = window.localStorage.getItem('user')
      const userCredentials = JSON.parse(userCredentialsString || '{}')
      if (userCredentials?.uid) {
        setUser(userCredentials)
        setIsAuthenticated(true)
      } else {
        router.push('/login')
      }
    }
  })

  return (
    <div className="grid grid-cols-4 justify-between h-screen">
      <div className="col-span-1 bg-black">
        <SideBarComponent />
      </div>
      <div className="col-span-2">
        <HelloUserHeader name={user.displayName} />
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <GroupComponent />
          </div>
          <div className="col-span-1">
            <NotificationsComponent />
          </div>
        </div>
      </div>
      <div className="col-start-4 mt-6 m-4">
        <IssuesSearchBar />
        <div className="grid grid-cols-1 mt-12">
          <IssuesComponent />
        </div>
      </div>
    </div>
  )
}
