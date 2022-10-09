
import React, { useEffect } from 'react'
import LoginForm from '../components/forms/LoginForm'
import LoginWithGoogleButton from '../components/buttons/AuthenticationWithGoogleButton'
import LoginWithGithubButton from '../components/buttons/AuthenticateWithGithubButton'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'

export default function LoginPage (): JSX.Element {
  const [errorMessage, setErrorMessage] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const router = useRouter()

  function getUser (): void {
    const user = window.localStorage.getItem('user')

    if (user !== null) {
      void router.push('/dashboard')
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    void getUser()
  }, [])

  if (loading) {
    return (
        <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
          <Skeleton height={100} width={100} />
        </div>
    )
  } else {
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
                  By signing up, you agree to the <a className="no-underline border-b border-grey-dark text-grey-dark"
                                                     href="#">
                  Terms of Service </a> and <a className="no-underline border-b border-grey-dark text-grey-dark"
                                               href="#">
                  Privacy Policy
                </a>
                </div>
              </div>

              <div className="text-grey-dark mt-6">
                Don't have an account? <a className="no-underline border-b border-blue text-blue" href="../signup/">
                Sign up
              </a>.
              </div>
            </div>
          </div>
        </div>
    )
  }
}
