import { Navigate } from 'react-router-dom'
import StorageService from 'store/services/StorageService'

const PrivateRoute = ({ children }: any) => {
  const userParsed = StorageService.getDataUser()

  if (!userParsed) {
    return <Navigate to="/login" />
  }

  // authorized so return child components
  return children
}
export default PrivateRoute
