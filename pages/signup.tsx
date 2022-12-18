import React, { useEffect } from 'react'
import FirstSignUpPhase from '../src/auth/components/FirstSignUpPhase'
import SignUpService from '../src/auth/services/SignUpService'
import UserSignUpModel from '../src/auth/models/UserSignUpModel'
import SignUpPhase from '../src/auth/enums/SignUpPhase'
import { SecondSignUpPhase } from '../src/auth/components/SecondSignUpPhase'

const signUpService = new SignUpService()

export default function SignUpPage (): JSX.Element {
  const phasesActionDictionary = {
    [SignUpPhase.FIRST]: (userInformation: UserSignUpModel): { isValid: boolean, message: string } => signUpService.isFirstPhaseValid(userInformation),
    [SignUpPhase.SECOND]: (userInformation: UserSignUpModel): { isValid: boolean, message: string } => signUpService.isSecondPhaseValid(userInformation),
    [SignUpPhase.THIRD]: (userInformation: UserSignUpModel): { isValid: boolean, message: string } => signUpService.isThirdPhaseValid(userInformation)
  }

  const [isCurrentPhaseValid, setIsCurrentPhaseValid] = React.useState(false)
  const [currentPhase, setCurrentPhase] = React.useState<SignUpPhase>(SignUpPhase.FIRST)
  const [inputGroup, setInputGroup] = React.useState<UserSignUpModel>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    position: '',
    company: ''
  })

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setInputGroup({ ...inputGroup, [name]: value })
  }

  const nextPhase = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (isCurrentPhaseValid) {
      setCurrentPhase(currentPhase + 1)
      setIsCurrentPhaseValid(false)
    }
  }

  useEffect(() => {
    const { isValid } = phasesActionDictionary[currentPhase](inputGroup)
    setIsCurrentPhaseValid(isValid)
  }, [inputGroup])

  return (
        <div className="flex h-screen bg-black">
            <div className="flex my-auto flex-row h-screen w-screen justify-center items-center">
                {currentPhase === SignUpPhase.FIRST && <FirstSignUpPhase handleChange={handleChange} nextPhase={nextPhase} isCurrentPhaseValid={isCurrentPhaseValid} />}
                {currentPhase === SignUpPhase.SECOND && <SecondSignUpPhase handleChange={handleChange} nextPhase={nextPhase} isCurrentPhaseValid={isCurrentPhaseValid} userInformation={inputGroup} />}
            </div>
          <div className="flex flex-col justify-end mb-20 mr-20">
          </div>
        </div>
  )
}
