import React from 'react'
import SignUpFirstAndLastNameQuestion from './SignUpFirstAndLastNameQuestion'
import TransparentInputField from '../../utils/components/TransparentInputField'
import IFirstSignUpPhaseProps from '../interfaces/IFirstSignUpPhaseProps'

const firstSignUpPhase = (props: IFirstSignUpPhaseProps): JSX.Element => {
  return (
        <>
            <div className="flex basis-1/4 mx-5">
                 <SignUpFirstAndLastNameQuestion />
            </div>
            <div className="flex basis-1/4 mx-5">
                <form className="w-full" autoComplete="off">
                    <TransparentInputField label={'First Name'} type={'name'} name={'firstName'} autoComplete={'off'} handleChange={props.handleChange}/>
                    <TransparentInputField label={'Last Name'} type={'name'} name={'lastName'} autoComplete={'off'} handleChange={props.handleChange}/>
                </form>
            </div>
        </>
  )
}

export default firstSignUpPhase
