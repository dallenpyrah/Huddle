import { ISignUpPhaseProps } from '../interfaces/ISignUpPhaseProps'
import React from 'react'
import TransparentInputField from './SignUpInputField'
import { SignUpWelcomeMessage } from './SignUpWelcomeMessage'
import { useRouter } from 'next/router'
import { appContainer } from '../../../inversify/container'
import { TYPES } from '../../../inversify/types'
import { IAuthenticationService } from '../service-interfaces/IAuthenticationService'

const authenticationService = appContainer.get<IAuthenticationService>(TYPES.AuthenticationService)

export const SecondSignUpPhase = (props: ISignUpPhaseProps): JSX.Element => {
  const router = useRouter()
  const [message, setMessage] = React.useState('')

  const moveToDashBoard = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const userCredentials = await authenticationService.signUpWithPasswordAndEmail(props.userInformation)
      if (userCredentials !== null) {
        void await router.push('/dashboard')
      }
    } catch (error: any) {
      setMessage(error.message)
    }
  }
  return (
        <>
            <div className="flex basis-1/4 mx-20">
                <SignUpWelcomeMessage firstName={props.userInformation?.firstName}
                                      lastName={props.userInformation?.lastName}/>
            </div>
            <div className="flex basis-1/4 mx-20">
                <form className="w-full" autoComplete="off" onSubmit={(event) => {
                  void moveToDashBoard(event)
                }}>
                    {message !== '' && <p className="text-red-500 text-xs italic mb-8">{message}</p>}
                    <TransparentInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'}
                                           handleChange={props.handleChange}/>
                    <TransparentInputField label={'Password'} type={'password'} name={'password'} autoComplete={'off'}
                                           handleChange={props.handleChange}/>
                    <TransparentInputField label={'Confirm Password'} type={'password'} name={'confirmPassword'}
                                           autoComplete={'off'} handleChange={props.handleChange}
                                           userInformation={props.userInformation}/>
                    {props.isCurrentPhaseValid &&
                        <div className="flex basis-1/4 justify-end">
                            <button
                                className='bg-zinc-800 py-2 px-3 text-white font-light rounded-sm absolute'>Next
                            </button>
                        </div>
                    }
                </form>
            </div>
        </>
  )
}
