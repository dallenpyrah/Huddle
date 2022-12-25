import React, { useEffect } from 'react'
import ITransparentInputFieldProps from '../interfaces/ITransparentInputFieldProps'
import { appContainer } from '../../../inversify/container'
import { IUserSignUpUtility } from '../../auth/interfaces/IUserSignUpUtility'
import { TYPES } from '../../../inversify/types'
import { PhaseValidityModel } from '../../auth/models/PhaseValidityModel'

const userSignUpUtility = appContainer.get<IUserSignUpUtility>(TYPES.UserSignUpUtility)

const transparentInputField = (props: ITransparentInputFieldProps): JSX.Element => {
  const [message, setMessage] = React.useState('')
  const [isValid, setIsValid] = React.useState(true)
  const labelClass = isValid ? 'peer-focus:text-green-300 text-gray-500' : 'peer-focus:text-red-400 text-red-300'
  const inputClass = isValid ? 'border-gray-300 focus:border-green-300' : 'border-red-300 focus:border-red-400'

  function validateInputField (value: string): void {
    let validityModel: PhaseValidityModel

    switch (props.name) {
      case 'email':
        validityModel = userSignUpUtility.isEmailValid(value)
        setIsValid(validityModel.isValid)
        setMessage(validityModel.message)
        break
      case 'password':
        validityModel = userSignUpUtility.isPasswordValid(value)
        setIsValid(validityModel.isValid)
        setMessage(validityModel.message)
        break
      case 'confirmPassword':
        validityModel = userSignUpUtility.isPasswordMatching(props.userInformation)
        setIsValid(validityModel.isValid)
        setMessage(validityModel.message)
        break
    }
  }

  const handleLocalComponentChange = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.value.length <= 0) {
      setIsValid(true)
      setMessage('')
    }

    validateInputField(event.currentTarget.value)
  }

  useEffect(() => {
    if (props.userInformation !== undefined) {
      validateInputField(props.userInformation.confirmPassword)
    }
  }, [props.userInformation?.confirmPassword])

  return (
      <div className="relative z-0 mb-6 w-full group">
          <input type={props.type} name={props.name}
                 onInput={(event) => {
                   props.handleChange(event)
                 }}
                 onInputCapture={(event) => {
                   handleLocalComponentChange(event)
                 }}
                 autoComplete={props.autoComplete}
                 id="floating_name"
                 className={`block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer
                 ${inputClass}`}
                 placeholder=" " required/>

        <label htmlFor="floating_name"
               className={`peer-focus:font-medium absolute text-sm
                  dark:text-gray-400 duration-300
                   transform -translate-y-7 scale-75 top-3
                    -z-10 origin-[0] peer-focus:left-0 
                    peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 ${labelClass}`}>
          {isValid && props.label}
          {!isValid && message}
        </label>
      </div>
  )
}

export default transparentInputField
