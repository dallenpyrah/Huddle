import SideBarComponent from '../components/SideBarComponent'
import React, { useEffect, Fragment, useState, useRef } from 'react'
import UserGroupsComponent from '../components/UserGroupsComponent'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../firebase-config'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardButtons from '../components/DashboardButtons'
import NewGroupsComponent from '../components/NewGroupsComponent'
import { Dialog, Transition } from '@headlessui/react'
import { func } from 'prop-types'

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

  function navigateToCreateGroupPage (): void {
    void router.push('/create-group')
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
                            <span className={'text-white text-2xl font-bold mr-1 p-6'}>Groups</span>
                            <button className={'rounded bg-black text-white py-1 px-2'} onClick={navigateToCreateGroupPage}><FontAwesomeIcon icon={faPlus} /></button>
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
                                <div className={'col-span-6 mt-9 ml-6 mb-4'}>
                                    <span className={'text-lg text-white font-semibold'}>Community Groups</span>
                                </div>
                                <div className={'col-span-3 mt-7 ml-4 mb-4 mr-5'}>
                                        <form>
                                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                            <div className={'flex flex-row'}>
                                                <input type="search" id="default-search" className="p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-200 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a group..." />
                                                <button type="submit" className="ml-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-300 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                                                    <FontAwesomeIcon icon={faSearch} /></button>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
