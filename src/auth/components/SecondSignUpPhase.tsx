import { ISignUpPhaseProps } from '../interfaces/ISignUpPhaseProps'
import React from 'react'
import TransparentInputField from '../../utils/components/TransparentInputField'
import { SignUpWelcomeMessage } from './SignUpWelcomeMessage'
import Link from 'next/link'
import SignUpService from '../services/SignUpService'
import { useRouter } from 'next/router'
import AuthenticationService from '../services/AuthenticationService'
import { axiosService } from '../../utils/services/AxiosService'

const signUpService = new SignUpService()
const authenticationService = new AuthenticationService(axiosService)

export const SecondSignUpPhase = (props: ISignUpPhaseProps): JSX.Element => {
  const router = useRouter()

  const moveToDashBoard = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const { isValid } = signUpService.isSecondPhaseValid(props.userInformation)

    if (!isValid) {
      return
    }

    // @ts-expect-error
    await authenticationService.signUpWithPasswordAndEmail(props.userInformation)
    await router.push('/dashboard')
  }
  return (
        <>
            <div className="flex basis-1/4 mx-20">
                <SignUpWelcomeMessage firstName={props.userInformation?.firstName} lastName={props.userInformation?.lastName} />
            </div>
            <div className="flex basis-1/4 mx-20">
                <form className="w-full" autoComplete="off" onSubmit={() => moveToDashBoard}>
                    <TransparentInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'} handleChange={props.handleChange}/>
                    <TransparentInputField label={'Password'} type={'password'} name={'password'} autoComplete={'off'} handleChange={props.handleChange}/>
                    <TransparentInputField label={'Confirm Password'} type={'password'} name={'confirmPassword'} autoComplete={'off'} handleChange={props.handleChange} userInformation={props.userInformation}/>

                    {props.isCurrentPhaseValid &&
                        <div className="flex basis-1/4 justify-end">
                            <Link href="/dashboard">
                                <button
                                    className='bg-zinc-800 py-2 px-3 text-white font-light rounded-sm absolute'>Next
                                </button>
                            </Link>
                        </div>
                    }
                </form>
            </div>
        </>
  )
}
