export default interface IAuthenticationModel {
  fullName: string | undefined
  password: string
  email: string
  confirmPassword: string | undefined
  rememberMe: boolean | undefined
}
