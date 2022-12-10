import React from 'react'
import FlexColHuddleTitle from '../src/home/components/cols/FlexColHuddleTitle'
import FlexColHeaderLinks from '../src/home/components/cols/FlexColHeaderLinks'
import HuddleSlogan from '../src/home/components/HuddleSlogan'
import GetStartedButton from '../src/home/components/buttons/GetStartedButton'
import LearnMoreButton from '../src/home/components/buttons/LearnMoreButton'

export default function HomePage (): JSX.Element {
  return (
        <div className="h-screen bg-black">
            <div className="flex flex-row w-screen justify-between">
                <FlexColHuddleTitle/>
               <FlexColHeaderLinks />
            </div>
            <div className="flex flex-row w-screen justify-items-center">
                <div className="flex basis-1/4 mx-52 my-72">
                    <div>
                        <HuddleSlogan />
                        <GetStartedButton />
                        <LearnMoreButton />
                    </div>
                </div>
            </div>
        </div>
  )
}
