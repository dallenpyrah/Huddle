import React from 'react'
import UserSignUpModel from '../models/UserSignUpModel'

export interface ISignUpPhaseProps {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  nextPhase: (event: React.FormEvent<HTMLFormElement>) => void
  isCurrentPhaseValid: boolean
  userInformation?: UserSignUpModel
}
