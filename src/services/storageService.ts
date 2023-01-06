export const storageService = {
  setUserLoggedIn,
  getAccessToken,
}

function setUserLoggedIn(userInfo: any): void {
  localStorage.setItem('exercise:userData', JSON.stringify(userInfo))
}

function getAccessToken() {
  const dataUser: any = localStorage.getItem('exercise:userData')

  const dataUserParsed = JSON.parse(dataUser)
  return dataUserParsed?.token || ''
}

export default storageService
