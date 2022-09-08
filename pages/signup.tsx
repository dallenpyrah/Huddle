import { NextPage } from 'next'
import React from 'react'
import SignUpComponent from '../components/SignupComponent'

export default function SignUpPage() {
  return (
    <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
      <SignUpComponent />
    </div>
  )
}