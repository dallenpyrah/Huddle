import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/auth/contexts/AuthUserContext'
import FlexColHuddleTitle from '../src/home/components/cols/FlexColHuddleTitle'
import LoginInputField from '../src/auth/components/LoginInputField'
import UserSignUpModel from '../src/auth/models/UserSignUpModel'
import AuthenticateWithGithubButton from '../src/auth/components/AuthenticateWithGithubButton'
import AuthenticateWithGoogleButton from '../src/auth/components/AuthenticationWithGoogleButton'

export default function LoginPage (): JSX.Element {
  const [isValid, setIsValid] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const { authUser, loading } = useAuth()
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

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setInputGroup({ ...inputGroup, [name]: value })
  }

  useEffect(() => {
    if (!loading && authUser !== null) {
      void router.push('/dashboard')
    }

    if (inputGroup.email.length > 0 && inputGroup.password.length > 0) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [authUser, loading, inputGroup])

  if (!loading && authUser === null) {
    return (
        <div className="h-screen bg-black max-h-screen">
            <div className="flex flex-row w-screen justify-between">
                <FlexColHuddleTitle/>
            </div>
            <div className="flex flex-row w-screen justify-center items-center my-32">
                <div className="flex basis-1/4 mx-5 justify-center">
                    <div className="w-full">
                        <div className="text-white text-center mb-16 font-extralight text-3xl">Welcome back</div>
                        <form className="">
                            {message !== '' && <p className="text-red-500 text-sm text-center mb-10">{message}</p>}
                            <LoginInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'}
                                             handleChange={handleChange}/>
                            <LoginInputField label={'Password'} type={'password'} name={'password'} autoComplete={'off'}
                                             handleChange={handleChange}/>
                            <button aria-label="Login" role="button"
                                    className="focus:outline-none justify-center hover:text-zinc-600 focus:ring-2 focus:ring-offset-1 focus:ring-zinc-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                <p className="text-base font-medium text-zinc-600">Sign In</p>
                            </button>
                            <hr className="mt-10 mb-6 w-2/3 mx-auto bg-green-300"/>
                            <div className="flex flex-row justify-center my-4">
                                <AuthenticateWithGithubButton setMessage={setMessage}/>
                            </div>
                            <div className="flex flex-row justify-center my-4">
                                <AuthenticateWithGoogleButton setMessage={setMessage}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  } else {
    return (
            <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
            </div>
    )
  }
}
