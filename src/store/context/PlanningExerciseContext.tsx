import { AllCategories } from 'models/ICategories'
import { AllExercises } from 'models/IExercises'
import { IPlanningExerciseContext } from 'models/PlanningExercise'
import * as Pages from 'pages'
import * as React from 'react'
import { CategoryService, ExercisesService } from 'store/services'
import { TemplateHome } from 'templates/Home'

export const PlanningExerciseContext = React.createContext<IPlanningExerciseContext>(
  {} as IPlanningExerciseContext
)

export const PlanningExerciseProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [categories, setCategories] = React.useState<AllCategories[]>([])
  const [exercises, setExercises] = React.useState<AllExercises[]>([])

  const getCategories = async () => {
    try {
      setIsLoading(true)
      const allCategories: any = await CategoryService.getAll()
      const newCategory: any = [{ id: 0, name: 'Todos' }, ...allCategories]

      setCategories(newCategory)
    } finally {
      setIsLoading(false)
    }
  }

  const getExercises = async () => {
    try {
      setIsLoading(true)
      const allExercises: any = await ExercisesService.getAll()
      setExercises(allExercises)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getCategories()
    getExercises()
  }, [])

  return (
    <>
      <PlanningExerciseContext.Provider
        value={{
          isLoading,
          categories,
          exercises,
        }}
      >
        <TemplateHome categories={[]}>
          <Pages.PlanningExercise />
        </TemplateHome>
      </PlanningExerciseContext.Provider>
    </>
  )
}
