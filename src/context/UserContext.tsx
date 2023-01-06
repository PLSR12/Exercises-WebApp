import { IUserContext, IUserInput } from 'models/IUser'
import * as React from 'react'
import { AuthService, StorageService } from 'services'

interface IUserProvider {
  children: React.ReactNode
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = React.useState<any>()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const onSubmit = async (values: IUserInput) => {
    setIsOpen(true)
    const userData = await AuthService.signIn(values)
      .then(() => {
        StorageService.setUserLoggedIn(userData)
        setUser(userData)
      })
      .finally(() => {
        setIsOpen(false)
      })

    console.log(userData)
  }

  const logoutUser = () => {
    StorageService.setUserLoggedOf()
    setUser(undefined)
  }

  return (
    <>
      <UserContext.Provider value={{ user, onSubmit, logoutUser, isOpen }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
