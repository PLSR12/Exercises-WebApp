import { IUserContext, IUserInput } from 'models/IUser'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthService, StorageService } from 'store/services'

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
        setInterval(() => {
          navigate('/')
        }, 2000)
      })
      .finally(() => {
        setIsOpen(false)
      })
  }

  const logoutUser = () => {
    StorageService.setUserLoggedOf()
    setUser({})
  }

  React.useEffect(() => {
    const userParsed = StorageService.getDataUser()
    setUser(userParsed)
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, onSubmit, logoutUser, isOpen }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
