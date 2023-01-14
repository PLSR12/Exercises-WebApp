import { Path } from 'common/config/pathsRoutes'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import * as Providers from 'store/context'
import * as Pages from '../pages'
import PrivateRoute from './private-routes'

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route
        path={Path.Home}
        element={
          <PrivateRoute>
            <Providers.HomeProvider />
          </PrivateRoute>
        }
      />
      <Route
        path={Path.Exercise}
        element={
          <PrivateRoute>
            <Pages.Exercise />
          </PrivateRoute>
        }
      />

      <Route path={Path.Login} element={<Pages.Login />} />
      <Route path="*" element={<Pages.notFound />} />
    </RoutesWrapper>
  )
}

export default Routes
