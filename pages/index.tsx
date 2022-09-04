import type { NextPage } from 'next'
import Image from 'next/image'
import LungingMan from '../images/lunge_man.png'
import NavigateToSignUpButton from '../buttons/NavigateToSignupButton'

const Home: NextPage = () => {

  return (
    <section>
      <div className="flex h-screen w-screen justify-evenly items-center">
        <div className="basis-1/2">
          <div>
            <h1 className='text-8xl font-semibold font-mono'>
              hu<span className='text-purple-400'>dd</span>le
            </h1>
          </div>
          <div>
            <h1 className='text-xl text-stone-700 font-light '>
              a new way to get the <span className='text-purple-400'>answers</span> you <span className='text-purple-400'>need</span>
            </h1>
          </div>
          <div className='mt-4'>
            <NavigateToSignUpButton />
          </div>
        </div>
        <div className='basis-1/4'>
          <Image src={LungingMan} alt="Picture of the author" width={500} height={500} />
        </div>
      </div>
      <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
      </div>
      <div className="flex h-screen w-screen justify-evenly items-center">
        </div>
     </section>
  )
}

export default Home
