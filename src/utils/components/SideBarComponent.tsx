import React from 'react'
import SideBarListItem from './SideBarListItem'
import { faBug, faGear, faHome, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export default function SideBarComponent (): JSX.Element {
  return (
        <div className="py-4 px-3 h-screen mt-3">
            <span className="self-center text-xl whitespace-nowrap text-white font-semibold font-mono ml-5">
                <a href='/huddle-frontend/pages'>
                    Hu<span className='text-purple-300'>dd</span>le
                </a>
            </span>
            <ul className="space-y-2 mt-5 ml-5">
                <SideBarListItem title="Dashboard" icon={faHome} navigateTo="/dashboard"/>
                <SideBarListItem title="Groups" icon={faPeopleGroup} navigateTo="/groups"/>
                <SideBarListItem title="Issues" icon={faBug} navigateTo="/issues"/>
                <SideBarListItem title="Settings" icon={faGear} navigateTo="/settings"/>
            </ul>
        </div>
  )
}
