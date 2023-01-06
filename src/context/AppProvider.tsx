import { ReactNode } from 'react'
import { MenuProvider } from './menuContext'
import { UserProvider } from './UserContext'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <MenuProvider>{children}</MenuProvider>
    </UserProvider>
  )
}

export default AppProvider
