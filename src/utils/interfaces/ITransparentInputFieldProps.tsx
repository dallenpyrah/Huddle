import React from 'react'
import UserSignUpModel from '../../auth/models/UserSignUpModel'

interface ITransparentInputFieldProps {
  label: string
  type: string
  name: string
  autoComplete: string
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  userInformation?: UserSignUpModel
}

export default ITransparentInputFieldProps
