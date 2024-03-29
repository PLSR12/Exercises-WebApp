import { HttpServiceLogin } from './httpService'
import StorageService from './StorageService'

const basePath = '/sessions'

export const AuthService = {
  signIn,
}
interface AuthProps {
  email: string
  password: string
}

async function signIn(data: AuthProps) {
  HttpServiceLogin.post(`${basePath}`, data).then((response: any) =>
    StorageService.setUserLoggedIn(response)
  )
}

export default AuthService
