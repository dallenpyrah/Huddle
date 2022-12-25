export default interface AuthenticationModel {
  fullName: string | undefined
  password: string
  email: string
  confirmPassword: string | undefined
  rememberMe: boolean | undefined
}
