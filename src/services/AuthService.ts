import { HttpService } from './httpService'
import { storageService } from './storageService'

const basePath = '/sessions'

export const AuthService = {
  signIn,
}
interface AuthProps {
  email: string
  password: string
}

async function signIn(data: AuthProps) {
  HttpService.post(`${basePath}`, data).then((response: any) =>
    storageService.setUserLoggedIn(response)
  )
}

export default AuthService
