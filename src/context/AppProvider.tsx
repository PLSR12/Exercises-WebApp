import { ReactNode } from 'react'
import { MenuProvider } from './menuContext'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <MenuProvider>{children}</MenuProvider>
}

export default AppProvider
