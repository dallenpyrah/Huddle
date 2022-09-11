import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import MainDashboardComponent from '../components/MainDashboardComponent';
import SideBarComponent from '../components/SideBarComponent'
import { useGlobalContext } from '../context/GlobalContext'

export default function DashboardPage() {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const userCredentialsString = window.localStorage.getItem('user')
      const userCredentials = JSON.parse(userCredentialsString || '{}')
      if (userCredentials?.uid) {
        setIsAuthenticated(true)
      } else {
        router.push('/login')
      }
    }
  })

  return (
    <div className="h-screen bg-black">
      <SideBarComponent />
      <MainDashboardComponent />
    </div>
  )
}
