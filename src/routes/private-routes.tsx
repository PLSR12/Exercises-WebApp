import { UserContext } from 'context/UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: any) => {
  const { user } = useContext(UserContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  // authorized so return child components
  return children
}
export default PrivateRoute
