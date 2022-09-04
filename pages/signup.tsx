import { NextPage } from 'next'
import React from 'react'
import SignUpComponent from '../components/SignupComponent'

const SignUp : NextPage = () => {
  return (
    <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
       <SignUpComponent />
    </div>
  )
}

export default SignUp