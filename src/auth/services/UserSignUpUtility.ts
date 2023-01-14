import UserSignUpModel from '../models/UserSignUpModel'
import { IUserSignUpUtility } from '../interfaces/service/IUserSignUpUtility'
import { injectable } from 'inversify'

@injectable()
export class UserSignUpUtility implements IUserSignUpUtility {
  isFirstPhaseValid (state: UserSignUpModel): { isValid: boolean, message: string } {
    if (state.firstName === '') {
      return { isValid: false, message: 'First name is required' }
    }

    if (state.lastName === '') {
      return { isValid: false, message: 'Last name is required' }
    }

    return { isValid: true, message: '' }
  }

  isSecondPhaseValid (state: UserSignUpModel | undefined): { isValid: boolean, message: string } {
    if (state === undefined) {
      return { isValid: false, message: 'Something went wrong' }
    }

    const matchingPasswordCheck = this.isPasswordMatching(state)
    const emailCheck = this.isEmailValid(state.email)
    const passwordCheck = this.isPasswordValid(state.password)

    if (!matchingPasswordCheck.isValid) {
      return matchingPasswordCheck
    }

    if (!emailCheck.isValid) {
      return emailCheck
    }

    if (!passwordCheck.isValid) {
      return passwordCheck
    }

    return { isValid: true, message: '' }
  }

  isPasswordMatching (user?: UserSignUpModel | undefined): { isValid: boolean, message: string } {
    if (user?.password !== user?.confirmPassword) {
      return { isValid: false, message: 'Passwords do not match' }
    }

    return { isValid: true, message: '' }
  }

  isPasswordValid (password: string): { isValid: boolean, message: string } {
    if (password.length < 6) {
      return { isValid: false, message: 'Password must be at least 6 characters long' }
    }

    if (!/[A-Z]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one uppercase letter' }
    }

    if (!/[a-z]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one lowercase letter' }
    }

    if (!/[0-9]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one number' }
    }

    return { isValid: true, message: '' }
  }

  isEmailValid (email: string): { isValid: boolean, message: string } {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Email is not valid' }
    }

    if (!email.includes('.')) {
      return { isValid: false, message: 'Email must contain a period' }
    }

    return { isValid: true, message: '' }
  }
}
