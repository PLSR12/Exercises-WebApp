import { HttpService } from './httpService'

const basePath = '/sessions'

export const AuthService = {
  signIn,
}
interface AuthProps {
  email: string
  password: string
}

async function signIn(data: AuthProps) {
  return await HttpService.post(`${basePath}`, data)
}
export default AuthService
