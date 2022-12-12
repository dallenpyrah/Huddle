import UserSignUpModel from '../models/UserSignUpModel'

class UserSignUpService {
  isFirstPhaseValid (state: UserSignUpModel): { isValid: boolean, message: string } {
    if (state.firstName === '') {
      return { isValid: false, message: 'First name is required' }
    }

    if (state.lastName === '') {
      return { isValid: false, message: 'Last name is required' }
    }

    return { isValid: true, message: '' }
  }

  isSecondPhaseValid (state: UserSignUpModel): { isValid: boolean, message: string } {
    if (state.email === '') {
      return { isValid: false, message: 'Email is required' }
    }

    if (!this.isPasswordMatching(state)) {
      return { isValid: false, message: 'Passwords do not match' }
    }

    return { isValid: true, message: '' }
  }

  isThirdPhaseValid (state: UserSignUpModel): { isValid: boolean, message: string } {
    if (state.position === '') {
      return { isValid: false, message: 'Position is required' }
    }

    if (state.company === '') {
      return { isValid: false, message: 'Company is required' }
    }

    return { isValid: true, message: '' }
  }

  isPasswordMatching (state: UserSignUpModel): boolean {
    return state.password === state.confirmPassword
  }
}

export default UserSignUpService
