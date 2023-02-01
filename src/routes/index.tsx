import { Path } from 'common/config/pathsRoutes'
import { LayoutAdmin } from 'pages/Admin'
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

      <Route
        path={Path.ListExercises}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.ExercisesProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.ListCategories}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.CategoriesProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.CreateExercise}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.ExerciseProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.EditExercise}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.ExerciseProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.CreateCategory}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.CategoryProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.EditCategory}
        element={
          <PrivateRoute>
            <LayoutAdmin>
              <Providers.CategoryProvider />
            </LayoutAdmin>
          </PrivateRoute>
        }
      />

      <Route path={Path.Login} element={<Pages.Login />} />
      <Route path="*" element={<Pages.notFound />} />
    </RoutesWrapper>
  )
}

export default Routes
