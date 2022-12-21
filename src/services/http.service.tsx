import axios from 'axios'
import storageService from './storage.service'
import { ToastService } from './toast.service'

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

HttpService.interceptors.response.use(function (response: any) {
  ;(response.data.messages || []).forEach((resultMessage: { message: string; type: any }) => {
    if (resultMessage.message) {
      resultMessage.message = resultMessage.message.replaceAll('P0001: ', '')
      // const t = i18n.t;
      switch (resultMessage.type) {
        case 0:
        case 'ERROR':
          ToastService.error(resultMessage.message)
          break
        case 1:
        case 'WARNING':
          ToastService.warn(resultMessage.message)
          break
        case 2:
        case 'INFO':
          ToastService.info(resultMessage.message)
          break
        case 3:
        case 'SUCCESS':
          ToastService.success(resultMessage.message)
          break
        default:
          ToastService.info(resultMessage.message)
          break
      }
    }
  })
  if (response.data.redirectRoute) {
    setTimeout(() => {}, 3000)
  }
  return response.data
})
export { HttpService }
