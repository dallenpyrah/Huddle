import UserSignUpModel from '../../models/UserSignUpModel'
import { PhaseValidityModel } from '../../models/PhaseValidityModel'

export interface IUserSignUpUtility {
  isFirstPhaseValid: (state: UserSignUpModel) => PhaseValidityModel

  isSecondPhaseValid: (state: UserSignUpModel | undefined) => PhaseValidityModel

  isPasswordMatching: (user?: UserSignUpModel | undefined) => PhaseValidityModel

  isPasswordValid: (password: string) => PhaseValidityModel

  isEmailValid: (email: string) => PhaseValidityModel
}
