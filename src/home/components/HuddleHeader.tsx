import React from 'react'
import Link from 'next/link'

const huddleHeader = (): JSX.Element => {
  return (
      <Link href="/">
        <a className="text-white font-medium text-2xl hover:text-green-400">Huddle</a>
      </Link>
  )
}

export default huddleHeader
