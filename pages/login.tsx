
import React, { useEffect, useLayoutEffect } from 'react'
import LoginForm from '../components/forms/LoginForm'
import LoginWithGoogleButton from '../components/buttons/AuthenticationWithGoogleButton'
import LoginWithGithubButton from '../components/buttons/AuthenticateWithGithubButton'
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const [errorMessage, setErrorMessage] = React.useState('')
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const userCredentialsString = window.localStorage.getItem('user')
      const userCredentials = JSON.parse(userCredentialsString || '{}')
      if (userCredentials?.uid) {
        router.push('/dashboard')
      } else {
        setIsAuthenticated(false)
      }
    }
  })

  return (
    <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Welcome Back</h1>
            <LoginForm errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
            <h6 className='text-center m-2'>
              OR
            </h6>
            <div>
              <LoginWithGoogleButton passErrorMessage={setErrorMessage} />
              <LoginWithGithubButton passErrorMessage={setErrorMessage} />
            </div>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service </a> and <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
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