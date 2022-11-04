import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SideBarListItem (props: { title: string, icon?: IconProp, navigateTo: string }): JSX.Element {
  return (
        <li>
            <a href={props.navigateTo} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-white dark:text-white hover:bg-zinc-800 dark:hover:bg-gray-700">
                {props.icon !== undefined && <span className="mr-4 text-purple-300"><FontAwesomeIcon icon={props.icon} /></span>}
                <span className="text-white">{props.title}</span>
            </a>
        </li>
  )
}
