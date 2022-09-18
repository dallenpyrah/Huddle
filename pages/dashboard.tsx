import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CommunityIssuesComponent from '../components/CommunityIssuesComponent';
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
      <div className='col-span-1 hidden md:block bg-slate-50'>
        <SideBarComponent />
      </div>
      <div className='col-span-2'>
        <HelloUserHeader name={user.displayName} />
        <GroupComponent />
      </div>
      <div className='col-span-2'>
        <div className='h-28'>
        </div>
        <NotificationsComponent />
      </div>
      <div className='col-span-2 hidden md:block md:col-start-3 lg:col-start-6 lg:mt-3 p-5'>
        <IssuesSearchBar />
        <div className='h-10'>
        </div>
        <IssuesComponent />
      </div>
      <div className='col-span-7 hidden md:block md:col-start-3 lg:col-start-2 p-5'>
        <CommunityIssuesComponent />
      </div>
    </div>
  )
}
