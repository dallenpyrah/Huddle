import React from 'react'
import AuthenticateWithGithubButton from '../components/buttons/AuthenticateWithGithubButton'
import AuthenticateWithGoogleButton from '../components/buttons/AuthenticationWithGoogleButton'
import SignUpForm from '../components/forms/SignUpForm'

export default function SignUpPage (): JSX.Element {
  const [errorMessage, setErrorMessage] = React.useState('')

  return (
    <div className="flex bg-violet-50 h-screen w-screen justify-evenly items-center">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <SignUpForm errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>

                    <h6 className='text-center m-2'>
                        OR
                    </h6>

                    <div>
                        <AuthenticateWithGoogleButton passErrorMessage={setErrorMessage}/>
                        <AuthenticateWithGithubButton passErrorMessage={setErrorMessage}/>
                    </div>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service </a> and <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </div>
  )
}
