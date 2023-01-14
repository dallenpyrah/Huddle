import React from 'react'
import Head from 'next/head'
import FlexColHuddleTitle from '../src/home/components/cols/FlexColHuddleTitle'
import LoginInputField from '../src/auth/components/LoginInputField'

export default function ForgotPassword (): JSX.Element {
  const [message, setMessage] = React.useState('')
  const [inputGroup, setInputGroup] = React.useState({
    email: ''
  })

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setInputGroup({ ...inputGroup, [name]: value })
  }

  const sendForgotPasswordEmail = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const response = await
      setMessage('A reset password link has been sent to your email')
    } catch (error: any) {
      setMessage(error.message)
    }
  }

  return (
        <div className="h-screen bg-black max-h-screen">
            <Head>
                <title>Forgot Password | Huddle</title>
            </Head>
            <div className="flex flex-row w-screen justify-between">
                <FlexColHuddleTitle/>
            </div>
            <div className="flex flex-row w-screen justify-center items-center my-60">
                <div className="flex basis-1/4 mx-5 justify-center">
                    <div className="w-full">
                        <div className="text-white text-center mb-16 font-extralight text-3xl">Forgot Password?</div>
                        <form onSubmit={sendForgotPasswordEmail}>
                            {message !== '' && <p className="text-red-500 text-sm text-center mb-10">{message}</p>}
                            <LoginInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'}
                                             handleChange={handleChange}/>
                            <button aria-label="Login" role="button"
                                    className="focus:outline-none justify-center hover:text-zinc-600 focus:ring-2 focus:ring-offset-1 focus:ring-zinc-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                <p className="text-base font-medium text-zinc-600">Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}
