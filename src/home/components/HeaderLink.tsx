import Link from 'next/link'
import React from 'react'

interface IHeaderLinkProps {
  title: string
  navigateTo: string
}

const headerLink = (props: IHeaderLinkProps): JSX.Element => {
  return (
      <span className="text-white font-semibold mx-7 hover:text-green-300">
          <Link href={props.navigateTo}>{props.title}</Link>
      </span>
  )
}

export default headerLink
