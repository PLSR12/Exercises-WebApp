import axios from 'axios'
import storageService from './StorageService'
import { ToastService } from './toastService'

const HttpService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

function BuildAuth() {
  const accessToken = storageService.getAccessToken()
  return accessToken
}

HttpService.interceptors.request.use((config: any) => {
  const authentication = BuildAuth() || ''
  if (authentication !== null) {
    config.headers.Authorization = 'Bearer ' + authentication
  }

  return config
})

HttpService.interceptors.response.use(
  function (response: any) {
    switch (response.status) {
      case 201:
      case 'SUCCESS':
        ToastService.success('Operação realizada com sucesso')
        break
      case 204:
      case 'OK':
        ToastService.success('Operação realizada com sucesso')
        break
      case 200:
      case 'LOGGED':
        ToastService.success('Login realizado com sucesso')
        break
      default:
        break
    }
    return response.data
  },
  (error) => {
    console.log(error)
    if (error.response.status === 401) {
      ToastService.error('Verifique seu email e senha')
      throw error
    } else if (error.response.status === 404) {
      window.location.href = `/not-found`
      throw error
    } else {
      ToastService.error('Erro ao realizar Operação')
      throw error
    }
  }
)

export { HttpService }
