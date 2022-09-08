import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import SideBarComponent from '../components/SideBarComponent'
import { useGlobalContext } from '../context/GlobalContext'

export default function DashboardPage () {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const persistedAuthenticated = window.localStorage.getItem('isAuthenticated')
      persistedAuthenticated === 'true' ? setIsAuthenticated(true) : router.push('/login')
    } 
  })

  return (
    <div className="h-screen">
      {isAuthenticated ? <SideBarComponent /> : <></>}
    </div>
  )
}
