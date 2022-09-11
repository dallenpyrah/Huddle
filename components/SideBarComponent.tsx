import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import SideBarListItem from './list-items/SideBarListItem'
import { faBug, faHome, faMessage, faPeopleGroup, faBell, faNewspaper, faGear } from '@fortawesome/free-solid-svg-icons'

export default function SideBarComponent () {
    return (
        <aside className="w-64" aria-label="Sidebar">
                <div className="overflow-y-auto h-screen py-4 px-3 bg-black rounded dark:bg-gray-800">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white ml-10">Huddle</span>
                    <ul className="space-y-2 mt-5 ml-5">
                        <SideBarListItem title="Dashboard" icon={faHome} />
                        <SideBarListItem title="Chat" icon={faMessage}/>
                        <SideBarListItem title="Groups" icon={faPeopleGroup}/>
                        <SideBarListItem title="Issues" icon={faBug}/>
                        <SideBarListItem title="Notifications" icon={faBell}/>
                        <SideBarListItem title="Reviews" icon={faNewspaper}/>
                        <SideBarListItem title="Settings" icon={faGear}/>
                    </ul>
                </div>
            </aside>
    )
}
