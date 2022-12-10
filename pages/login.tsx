import React, { useEffect } from 'react'
import LoginForm from '../src/auth/components/LoginForm'
import LoginWithGoogleButton from '../src/auth/components/AuthenticationWithGoogleButton'
import LoginWithGithubButton from '../src/auth/components/AuthenticateWithGithubButton'
import { useRouter } from 'next/router'
import { useAuth } from '../src/auth/contexts/AuthUserContext'

export default function LoginPage (): JSX.Element {
  const [errorMessage, setErrorMessage] = React.useState('')
  const { authUser, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && authUser !== null) {
      void router.push('/dashboard')
    }
  }, [authUser, loading])

  if (!loading && authUser === null) {
    return (
            <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Welcome Back</h1>
                            <LoginForm errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
                            <h6 className='text-center m-2'>
                                OR
                            </h6>
                            <div>
                                <LoginWithGoogleButton passErrorMessage={setErrorMessage}/>
                                <LoginWithGithubButton passErrorMessage={setErrorMessage}/>
                            </div>
                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#">
                                Terms of Service </a> and <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#">
                                Privacy Policy
                            </a>
                            </div>
                        </div>

                        <div className="text-grey-dark mt-6">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Don't have an account? <a className="no-underline border-b border-blue text-blue"
                                                      href="../signup/">
                            Sign up
                        </a>.
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
