import { Path } from 'common/config/pathsRoutes'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import * as Providers from 'store/context'
import { TemplateAdmin } from 'templates/Admin'
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
        path={Path.PlanningExercise}
        element={
          <PrivateRoute>
            <Providers.PlanningExerciseProvider />
          </PrivateRoute>
        }
      />

      <Route
        path={Path.ListExercises}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.ExercisesProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.ListCategories}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.CategoriesProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.CreateExercise}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.ExerciseProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.EditExercise}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.ExerciseProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.CreateCategory}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.CategoryProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route
        path={Path.EditCategory}
        element={
          <PrivateRoute>
            <TemplateAdmin>
              <Providers.CategoryProvider />
            </TemplateAdmin>
          </PrivateRoute>
        }
      />

      <Route path={Path.Login} element={<Pages.Login />} />
      <Route path="*" element={<Pages.notFound />} />
    </RoutesWrapper>
  )
}

export default Routes
