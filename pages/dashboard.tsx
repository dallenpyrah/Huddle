import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import HelloUserHeader from '../components/headers/HelloUserHeader';
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
    <div className="h-screen">
      <div className="flex flex-row w-screen h-screen bg-purple-50">
        <SideBarComponent />
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col rounded-lg">
            <div className="flex flex-row">
              <HelloUserHeader name={user.displayName} />
            </div>
            <div className="flex flex-row">
              <HelloUserHeader name={user.displayName} />
            </div>
          </div>
          <div className="flex flex-col p-5 rounded-lg w-1/3 mt-2">
            <IssuesSearchBar />
            <div className="flex flex-row">
              <HelloUserHeader name={user.displayName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
