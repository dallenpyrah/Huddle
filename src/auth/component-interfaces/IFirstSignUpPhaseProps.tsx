import React from 'react'

interface IFirstSignUpPhaseProps {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  nextPhase: () => void
  isCurrentPhaseValid: boolean
}

export default IFirstSignUpPhaseProps
