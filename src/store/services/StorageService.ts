export const StorageService = {
  setUserLoggedIn,
  getAccessToken,
  setUserLoggedOf,
  getDataUser,
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

function getDataUser() {
  const dataUser: any = localStorage.getItem('exercise:userData')

  const dataUserParsed = JSON.parse(dataUser)
  return dataUserParsed
}

export default StorageService
