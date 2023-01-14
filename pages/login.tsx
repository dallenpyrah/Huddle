import { useRouter } from 'next/router'
import FlexColHuddleTitle from '../src/home/components/cols/FlexColHuddleTitle'
import LoginInputField from '../src/auth/components/LoginInputField'
import UserSignUpModel from '../src/auth/models/UserSignUpModel'
import AuthenticateWithGithubButton from '../src/auth/components/AuthenticateWithGithubButton'
import AuthenticateWithGoogleButton from '../src/auth/components/AuthenticationWithGoogleButton'
import { IAuthenticationService } from '../src/auth/interfaces/service/IAuthenticationService'
import { TYPES } from '../inversify/types'
import { appContainer } from '../inversify/container'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const authenticationService = appContainer.get<IAuthenticationService>(TYPES.AuthenticationService)

export default function LoginPage (): JSX.Element {
  const [message, setMessage] = React.useState('')
  const router = useRouter()
  const [inputGroup, setInputGroup] = React.useState<UserSignUpModel>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    position: '',
    company: ''
  })

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const userCredentials = await authenticationService.signInWithEmailAndPassword(inputGroup)

      if (userCredentials.user !== undefined) {
        await router.push('/dashboard')
      }
    } catch (error: any) {
      setMessage(error.message)
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setInputGroup({ ...inputGroup, [name]: value })
  }

  return (
      <div className="h-screen bg-black max-h-screen">
          <Head>
              <title>Login | Huddle</title>
          </Head>
          <div className="flex flex-row w-screen justify-between">
              <FlexColHuddleTitle/>
          </div>
          <div className="flex flex-row w-screen justify-center items-center my-24">
              <div className="flex basis-1/4 mx-5 justify-center">
                  <div className="w-full">
                      <div className="text-white text-center mb-16 font-extralight text-3xl">Welcome back</div>
                      <form className="" onSubmit={(event) => {
                        void handleSignIn(event)
                      }}>
                            {message !== '' && <p className="text-red-500 text-sm text-center mb-10">{message}</p>}
                            <LoginInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'}
                                             handleChange={handleChange}/>
                            <LoginInputField label={'Password'} type={'password'} name={'password'} autoComplete={'off'}
                                             handleChange={handleChange}/>
                            <Link href={'/forgot-password'}>
                                <a className="text-zinc-500 text-sm underline float-right text-center mb-5">Forgot
                                    password?</a>
                            </Link>
                            <button aria-label="Login" role="button"
                                    className="focus:outline-none justify-center hover:text-zinc-600 focus:ring-2 focus:ring-offset-1 focus:ring-zinc-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                <p className="text-base font-medium text-zinc-600">Sign In</p>
                            </button>
                        </form>
                        <hr className="mt-10 mb-6 w-2/3 mx-auto bg-green-300"/>
                        <div className="flex flex-row justify-center my-4">
                            <AuthenticateWithGithubButton setMessage={setMessage}/>
                        </div>
                        <div className="flex flex-row justify-center my-4">
                            <AuthenticateWithGoogleButton setMessage={setMessage}/>
                        </div>
                        <div className="flex flex-row justify-center my-4">
                            <Link href={'/signup'}>
                                <a className="text-zinc-500 text-sm underline text-center mt-5">Don't have an
                                    account?</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
