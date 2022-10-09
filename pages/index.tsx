import Image from 'next/image'
import LungingMan from '../images/lunge_man.png'
import { useRouter } from 'next/router'
import React from 'react'

export default function HomePage (): JSX.Element {
  const router = useRouter()

  function navigateToPage (page: string): void {
    void router.push(page)
  }

  return (
    <section>
      <div className="flex h-screen w-screen justify-evenly items-center">
        <div className="basis-1/2">
          <div>
            <h1 className='text-8xl font-semibold font-mono'>
              hu<span className='text-purple-400'>dd</span>le
            </h1>
          </div>
          <div>
            <h1 className='text-xl text-stone-700 font-light '>
              a new way to get the <span className='text-purple-400'>answers</span> you <span className='text-purple-400'>need</span>
            </h1>
          </div>
          <div className='mt-4'>
            <div>
              <button type="button" onClick={() => navigateToPage('/signup')} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Get Started
              </button>
              <button type="button" onClick={() => navigateToPage('/login')} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <Image src={LungingMan} alt="Picture of the author" width={500} height={500} />
        </div>
      </div>
      <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
      </div>
      <div className="flex h-screen w-screen justify-evenly items-center">
      </div>
    </section>
  )
}
