import { useRouter } from 'next/router'
import React from 'react'

export default function NavigateToSignUpButton () {
  const router = useRouter();
  
  function navigateToSignUpPage () {
    router.push('/signup')
  }

  return (
    <div>
      <button type="button" onClick={navigateToSignUpPage} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Get Started
        </button>
    </div>
  )
}