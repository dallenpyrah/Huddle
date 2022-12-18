import { ISignUpPhaseProps } from '../interfaces/ISignUpPhaseProps'
import React from 'react'
import TransparentInputField from '../../utils/components/TransparentInputField'
import { SignUpWelcomeMessage } from './SignUpWelcomeMessage'

export const SecondSignUpPhase = (props: ISignUpPhaseProps): JSX.Element => {
  return (
        <>
            <div className="flex basis-1/4 mx-5">
                <SignUpWelcomeMessage firstName={props.userInformation?.firstName} lastName={props.userInformation?.lastName} />
            </div>
            <div className="flex basis-1/4 mx-5">
                <form className="w-full" autoComplete="off" onSubmit={(event) => props.nextPhase(event) }>
                    <TransparentInputField label={'Email'} type={'email'} name={'email'} autoComplete={'off'} handleChange={props.handleChange}/>
                    <TransparentInputField label={'Password'} type={'password'} name={'password'} autoComplete={'off'} handleChange={props.handleChange}/>
                    <TransparentInputField label={'Confirm Password'} type={'password'} name={'confirmPassword'} autoComplete={'off'} handleChange={props.handleChange} userInformation={props.userInformation}/>
                    <TransparentInputField label={'Company (optional)'} type={'text'} name={'company'} autoComplete={'off'} handleChange={props.handleChange}/>

                    <div className="flex basis-1/4 justify-start">
                        <button
                            className='bg-red-400 py-2 px-3 text-white font-light rounded-sm absolute'>Back
                        </button>
                    </div>
                    {props.isCurrentPhaseValid &&
                        <div className="flex basis-1/4 justify-end">
                            <button
                                className='bg-green-400 py-2 px-3 text-white font-light rounded-sm absolute'>Next
                            </button>
                        </div>
                    }
                </form>
            </div>
        </>
  )
}
