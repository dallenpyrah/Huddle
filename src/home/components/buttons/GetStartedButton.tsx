import React from 'react'
import Link from 'next/link'

const getStartedButton = (): JSX.Element => {
  return (
      <Link href="/signup">
          <button className="bg-white text-sm font-light text-black p-2 my-5 rounded mr-5 hover:bg-gray-200">
             Get Started
          </button>
      </Link>
  )
}

export default getStartedButton
