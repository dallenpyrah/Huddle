import { useRouter } from 'next/router'
import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import AuthenticationModel from '../models/AuthenticationModel'
import AuthenticationService from '../services/AuthenticationService'
import { axiosService } from '../services/AxiosService'

export default function LoginForm (props: { setErrorMessage: (errorMessage: any) => void, errorMessage: string }): JSX.Element {
  const { setIsAuthenticated } = useGlobalContext()
  const router = useRouter()
  const authenticationService = new AuthenticationService(axiosService)

  async function login (event: any): Promise<void> {
    try {
      event.preventDefault()
      const user = new AuthenticationModel(event.target.email.value, event.target.password.value)
      const userCredentials = await authenticationService.login(user)
      if (userCredentials.user !== null) {
        setIsAuthenticated(true)
        void await router.push('/dashboard')
      }
    } catch (error: any) {
      props.setErrorMessage(error.message)
    }
  }

  return (
        <form onSubmit={login}>
            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />

            <span className='w-full text-center text-red-500'>
                {props.errorMessage.length >= 1 && <h6>{props.errorMessage}</h6>}
            </span>

            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
            >Login</button>
        </form>
  )
}
