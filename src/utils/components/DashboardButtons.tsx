import { faPlus, faUserGroup, faMessage, faBell, faBug, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function DashboardButtons (): JSX.Element {
  const [showMenuButtons, setShowMenuButtons] = useState(false)

  return (
            <div className="col-span-4 text-right mt-7">
                {showMenuButtons &&
                    <>
                        <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 text-white"><FontAwesomeIcon
                            icon={faPlus}/></button>
                        <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 text-white"><FontAwesomeIcon
                            icon={faUserGroup}/></button>
                        <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 text-white"><FontAwesomeIcon
                            icon={faMessage}/></button>
                        <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 text-white"><FontAwesomeIcon
                            icon={faBell}/></button>
                        <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 text-white"><FontAwesomeIcon
                            icon={faBug}/></button>
                    </>
                }
                <button onClick={() => setShowMenuButtons(!showMenuButtons)} className={`bg-black rounded pl-2 pr-2 pt-1 pb-1 m-1 ${showMenuButtons ? 'text-purple-300' : 'text-white'}`}><FontAwesomeIcon icon={faBars} /></button>
            </div>
  )
}
