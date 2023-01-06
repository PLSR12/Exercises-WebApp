export const StorageService = {
  setUserLoggedIn,
  getAccessToken,
  setUserLoggedOf,
}

function setUserLoggedIn(userInfo: any): void {
  localStorage.setItem('exercise:userData', JSON.stringify(userInfo))
}

function setUserLoggedOf() {
  localStorage.removeItem('exercise:userData')
  localStorage.clear()
}

function getAccessToken() {
  const dataUser: any = localStorage.getItem('exercise:userData')

  const dataUserParsed = JSON.parse(dataUser)
  return dataUserParsed?.token || ''
}

export default StorageService
