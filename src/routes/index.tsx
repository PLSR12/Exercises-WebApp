import { Path } from 'common/config/pathsRoutes'
import * as Providers from 'context'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import * as Pages from '../pages'

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path={Path.Home} element={<Providers.HomeProvider />} />
      <Route path={Path.Login} element={<Pages.Login />} />
      <Route path={Path.Exercise} element={<Pages.Exercise />} />
    </RoutesWrapper>
  )
}
