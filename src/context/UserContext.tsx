import { IUserContext, IUserInput } from 'models/IUser'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthService, StorageService } from 'services'

interface IUserProvider {
  children: React.ReactNode
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = React.useState<any>({})
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const onSubmit = async (values: IUserInput) => {
    setIsOpen(true)
    await AuthService.signIn(values)
      .then(() => {
        setTimeout(() => {
          navigate('/')
        }, 2000)
      })
      .finally(() => {
        setIsOpen(false)
      })
  }

  const logoutUser = () => {
    StorageService.setUserLoggedOf()
    setUser(undefined)
  }

  const userLocal = localStorage.getItem('exercise:userData')

  React.useEffect(() => {
    setUser(userLocal)
  }, [userLocal])

  return (
    <>
      <UserContext.Provider value={{ user, onSubmit, logoutUser, isOpen }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
