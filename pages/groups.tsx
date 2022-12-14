import SideBarComponent from '../src/utils/components/SideBarComponent'
import React, { useEffect } from 'react'
import UserGroupsComponent from '../src/groups/components/UserGroupsComponent'
import { useRouter } from 'next/router'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardButtons from '../src/utils/components/DashboardButtons'
import NewGroupsComponent from '../src/groups/components/NewGroupsComponent'
import { useAuth } from '../src/auth/contexts/AuthUserContext'

export default function GroupsPage (): JSX.Element {
  const { authUser, loading, userId } = useAuth()
  const router = useRouter()

  function navigateToCreateGroupPage (): void {
    void router.push('/create-group')
  }

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
                <div className="col-span-7 xl:col-span-6 mr-8">
                    <div className="grid grid-cols-9">
                        <div className="col-span-5 mt-7 mb-5">
                            <span className={'text-white text-2xl font-bold mr-1 p-6'}>Groups</span>
                            <button className={'rounded bg-black text-white py-1 px-2'}
                                    onClick={navigateToCreateGroupPage}><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                        <DashboardButtons/>
                        <UserGroupsComponent user={authUser} userId={userId}/>
                        <div className={'col-span-3'}>
                        </div>
                        <div className={'col-span-3'}>
                            <NewGroupsComponent user={authUser}/>
                        </div>
                        <div className={'col-span-9 bg-black h-[31rem] ml-4 mt-8 rounded-lg mb-10'}>
                            <div className={'grid grid-cols-9'}>
                                <div className={'col-span-6 mt-9 ml-6 mb-4'}>
                                    <span className={'text-lg text-white font-semibold'}>Community Groups</span>
                                </div>
                                <div className={'col-span-3 mt-7 ml-4 mb-4 mr-5'}>
                                    <form>
                                        <label htmlFor="default-search"
                                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                        <div className={'flex flex-row'}>
                                            <input type="search" id="default-search"
                                                   className="p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-200 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Search for a group..."/>
                                            <button type="submit"
                                                    className="ml-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-300 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                                                <FontAwesomeIcon icon={faSearch}/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  } else {
    return (
            <div className="grid grid-cols-7 bg-zinc-900">
            </div>
    )
  }
}
