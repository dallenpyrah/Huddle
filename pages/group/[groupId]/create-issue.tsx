import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { axiosService } from '../../../services/axios/AxiosService'
import IIssueModel from '../../../models/issue/IIssueModel'
import IssuesService from '../../../services/issue/IssuesService'

export default function CreateIssue (): JSX.Element {
  const [newIssue, setNewIssue] = useState<IIssueModel>({
    comments: [],
    createdAt: new Date(),
    framework: '',
    group: {} as any,
    id: 0,
    language: '',
    status: '',
    updatedAt: new Date(),
    user: {} as any,
    userId: 0,
    title: '',
    description: '',
    groupId: 0
  })

  const router = useRouter()
  const issuesService = new IssuesService(axiosService)

  const createIssue = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const createdIssue = await issuesService.createIssue(newIssue)

      if (createdIssue !== undefined) {
        void await router.push(`/group/${newIssue.groupId}/issues`)
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  function handleInput (event: any): void {
    const name = event.target.name
    const value = event.target.value
    setNewIssue(newIssue => ({ ...newIssue, [name]: value }))
  }

  return (
        <div className={'grid grid-cols-4 bg-zinc-900 h-screen'}>
            <div className={'col-span-2 mt-52 bg-black h-1/2 rounded-lg text-zinc-400 col-start-2'}>
                <div className={'p-5'}>
                    <h1 className={'mt-7 ml-10 text-xl font-semibold text-white'}>New Issue</h1>
                    <form className="ml-10 mr-10 mt-8" autoComplete="off" onSubmit={(event) => { void createIssue(event) }}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input value={newIssue?.title} onInput={handleInput} type="title" name="title" id="floating_title"
                                   className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_title"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input value={newIssue?.description} onInput={handleInput} type="description" name="description" id="floating_name"
                                   className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <select name="color" onInput={handleInput} id="underline_select"
                                    className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer">
                                <option defaultValue="bg-purple-300">Language</option>
                                <option value="bg-purple-300">C#</option>
                                <option value="bg-blue-300">C++</option>
                                <option value="bg-orange-300">JavaScript</option>
                                <option value="bg-green-300">Python</option>
                            </select>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <select name="color" onInput={handleInput} id="underline_select"
                                    className="block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer">
                                <option defaultValue="bg-purple-300">Framework</option>
                                <option value="bg-purple-300">React</option>
                                <option value="bg-blue-300">.NET Core</option>
                                <option value="bg-orange-300">Vue</option>
                                <option value="bg-green-300">Django</option>
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
