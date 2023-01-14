import React from 'react'
import SignUpFirstAndLastNameQuestion from './SignUpFirstAndLastNameQuestion'
import TransparentInputField from './SignUpInputField'
import { ISignUpPhaseProps } from '../interfaces/prop/ISignUpPhaseProps'
import AuthenticateWithGithubButton from './AuthenticateWithGithubButton'
import AuthenticateWithGoogleButton from './AuthenticationWithGoogleButton'

const firstSignUpPhase = (props: ISignUpPhaseProps): JSX.Element => {
  const [message, setMessage] = React.useState('')

  return (
        <>
            <div className="flex basis-1/4 mx-5">
                <SignUpFirstAndLastNameQuestion/>
            </div>
            <div className="flex basis-1/4 mx-5">
                <form className="w-full" autoComplete="off" onSubmit={(event) => props.nextPhase(event)}>
                    {message !== '' && <p className="text-red-500 text-xs italic mb-6">{message}</p>}
                    <TransparentInputField label={'First Name'} type={'text'} name={'firstName'} autoComplete={'off'}
                                           handleChange={props.handleChange}/>
                    <TransparentInputField label={'Last Name'} type={'text'} name={'lastName'} autoComplete={'off'}
                                           handleChange={props.handleChange}/>
                    {props.isCurrentPhaseValid &&
                        <div className="flex basis-1/4 justify-end">
                            <button
                                className='bg-zinc-800 py-2 px-3 text-white font-light rounded-sm absolute'>Next
                            </button>
                        </div>
                    }
                    {props.userInformation?.firstName === '' && <>
                        <div className="flex flex-row text-center justify-center mt-2 text-zinc-400">
                            or
                        </div>
                        <div className="flex flex-row justify-center my-2">
                            <AuthenticateWithGithubButton setMessage={setMessage}/>
                        </div>
                        <div className="flex flex-row justify-center my-2">
                            <AuthenticateWithGoogleButton setMessage={setMessage}/>
                        </div>
                    </>}
                </form>
            </div>
        </>
  )
}

export default firstSignUpPhase
