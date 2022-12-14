import React from 'react'
import Link from 'next/link'

const learnMoreButton = (): JSX.Element => {
  return (
      <Link href="/about">
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-light p-2 my-5 rounded">
              Learn More
          </button>
      </Link>
  )
}

export default learnMoreButton
