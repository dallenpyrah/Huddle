import React from 'react'
import HeaderLink from '../HeaderLink'

const flexColHeaderLinks = (): JSX.Element => {
  return (
      <div className="flex flex-col mx-10 my-10">
          <div>
              <HeaderLink title={'API'} navigateTo={'https://github.com/dallenpyrah/HuddleAPI'}/>
              <HeaderLink title={'Dashboard'} navigateTo={'/dashboard'}/>
              <HeaderLink title={'About'} navigateTo={'/about'}/>
          </div>
      </div>
  )
}

export default flexColHeaderLinks
