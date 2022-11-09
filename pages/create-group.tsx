import React, { useEffect, useState } from 'react'
import GroupsService from '../services/GroupsService'
import { axiosService } from '../services/AxiosService'
import { useRouter } from 'next/router'
import GroupModel from '../models/GroupModel'
import { auth } from '../firebase-config'
import { User } from 'firebase/auth'
import UserGroupsService from '../services/UserGroupsService'

export default function CreateGroupPage (): JSX.Element {
  const [inputGroup, setInputGroup] = useState({ name: '', description: '', color: '' })
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const groupsService = new GroupsService(axiosService)

  const createGroup = async (event: any): Promise<void> => {
    try {
      event.preventDefault()
      const groupToCreate = new GroupModel(inputGroup.name, inputGroup.description, inputGroup.color, user?.uid)
      const createdGroup = await groupsService.createGroup(groupToCreate)

      if (createdGroup !== undefined) {
        void await router.push(`/group/${createdGroup.id}`)
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  function getUser (): void {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user)
      } else {
        void router.push('/login')
      }
    })
  }

  function handleInput (event: any): void {
    const name = event.target.name
    const value = event.target.value
    setInputGroup(inputGroup => ({ ...inputGroup, [name]: value }))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
        <div className={'grid grid-cols-4 bg-zinc-900 h-screen'}>
            <div className={'col-span-2 mt-52 bg-black h-1/2 rounded-lg text-zinc-400 col-start-2'}>
                <div className={'p-5'}>
                    <h1 className={'mt-7 ml-10 text-xl font-semibold text-white'}>New Group</h1>
                    <form className="ml-10 mr-10 mt-8" autoComplete="off" onSubmit={createGroup}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input value={inputGroup?.name} onInput={handleInput} type="name" name="name" id="floating_name"
                                   className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input value={inputGroup?.description} onInput={handleInput} type="description" name="description" id="floating_name"
                                   className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <select name="color" onInput={handleInput} id="underline_select"
                                    className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer">
                                <option defaultValue="bg-purple-300">Choose a group color</option>
                                <option value="bg-purple-300">Purple</option>
                                <option value="bg-blue-300">Blue</option>
                                <option value="bg-orange-300">Orange</option>
                                <option value="bg-green-300">Green</option>
                            </select>
                        </div>

                        <button className={'bg-zinc-900 text-white hover:bg-purple-600 p-2 rounded-md mt-4 float-right'} type='submit'>Create</button>
                        <button className={'bg-red-600 text-white hover:bg-zinc-900 p-2 rounded-md mt-4 float-left'} onClick={() => router.back()}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
  )
}
