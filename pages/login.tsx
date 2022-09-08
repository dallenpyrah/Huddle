import { NextPage } from 'next'
import React from 'react'
import LoginComponent from '../components/LoginComponent'

export default function LoginPage() {
    return (
        <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
            <LoginComponent />
        </div>
    )
}