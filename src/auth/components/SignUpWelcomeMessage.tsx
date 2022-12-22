import React from 'react'
import { ISignUpWelcomeMessageProps } from '../component-interfaces/ISignUpWelcomeMessageProps'

export const SignUpWelcomeMessage = (props: ISignUpWelcomeMessageProps): JSX.Element => {
  return (
      <div>
          <h1 className="text-white text-4xl font-extralight">Welcome {props.firstName} {props.lastName}</h1>
          <p className="text-gray-500 text-lg font-extralight mt-5">We just need a bit more information, then we can
              send you on your way.</p>
      </div>
  )
}
