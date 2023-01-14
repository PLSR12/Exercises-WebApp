import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from 'store/context/UserContext'

const PrivateRoute = ({ children }: any) => {
  const { user } = useContext(UserContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  // authorized so return child components
  return children
}
export default PrivateRoute
