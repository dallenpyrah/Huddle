import React from 'react'
import SideBarListItem from './list-items/SideBarListItem'
import { faBug, faHome, faMessage, faPeopleGroup, faBell, faNewspaper, faGear } from '@fortawesome/free-solid-svg-icons'

export default function SideBarComponent (): JSX.Element {
  return (
        <div className="py-4 px-3 h-screen mt-3">
            <span className="self-center text-xl whitespace-nowrap text-white font-semibold font-mono ml-5">
                <a href='/pages'>
                    Hu<span className='text-purple-300'>dd</span>le
                </a>
            </span>
            <ul className="space-y-2 mt-5 ml-5">
                <SideBarListItem title="Dashboard" icon={faHome} navigateTo="/dashboard" />
                <SideBarListItem title="Chat" icon={faMessage} navigateTo="/chat" />
                <SideBarListItem title="Groups" icon={faPeopleGroup} navigateTo="/groups" />
                <SideBarListItem title="Issues" icon={faBug} navigateTo="/issues" />
                <SideBarListItem title="Notifications" icon={faBell} navigateTo="/notifications" />
                <SideBarListItem title="Reviews" icon={faNewspaper} navigateTo="/reviews" />
                <SideBarListItem title="Settings" icon={faGear} navigateTo="/settings" />
            </ul>
        </div>
  )
}
