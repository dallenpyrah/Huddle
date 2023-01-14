import React from 'react'
import FlexColHuddleTitle from '../src/home/components/cols/FlexColHuddleTitle'
import FlexColHeaderLinks from '../src/home/components/cols/FlexColHeaderLinks'
import HuddleSlogan from '../src/home/components/HuddleSlogan'
import GetStartedButton from '../src/home/components/buttons/GetStartedButton'
import LearnMoreButton from '../src/home/components/buttons/LearnMoreButton'
import Image from 'next/image'
import HomePageCube from '../public/HomePageCube.png'
import Head from 'next/head'

export default function HomePage (): JSX.Element {
  return (
      <div className="h-screen bg-black max-h-screen">
          <Head>
              <title>Huddle | Crowd sourcing meets AI</title>
          </Head>
          <div className="flex flex-row w-screen justify-between">
              <FlexColHuddleTitle/>
              <FlexColHeaderLinks/>
          </div>
          <div className="flex flex-row w-screen justify-center items-center my-40">
              <div className="flex basis-1/4 ml-52">
                  <div>
                      <HuddleSlogan/>
                      <GetStartedButton/>
                      <LearnMoreButton/>
                    </div>
                </div>
                <div className="flex basis-1/2 items-center ml-52">
                    <Image src={HomePageCube} objectFit={'cover'} className="rounded-lg" priority/>
                </div>
            </div>
        </div>
  )
}
