import { Path } from 'common/config/pathsRoutes'
import { AllExercises, IExercisesListContext } from 'models/IExercises'
import * as Pages from 'pages'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { exercisesListMapper } from 'store/mapper/exercisesMapper'
import { ExercisesService } from 'store/services'

export const ExercisesContext = React.createContext<IExercisesListContext>(
  {} as IExercisesListContext
)

export const ExercisesProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [exercises, setExercises] = React.useState<AllExercises[]>([])
  const navigate = useNavigate()

  const getExercises = async () => {
    try {
      setIsLoading(true)
      const allExercises: any = await ExercisesService.getAll()
      const dataFormatted = exercisesListMapper(allExercises)
      setExercises(dataFormatted)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNew = () => {
    navigate(Path.CreateExercise)
  }

  const handleEdit = (data: any) => {
    navigate(`/edit-exercise/:${data.id}`, { state: data })
  }

  React.useEffect(() => {
    getExercises()
  }, [])

  return (
    <>
      <ExercisesContext.Provider
        value={{
          isLoading,
          exercises,
          handleNew,
          handleEdit,
        }}
      >
        <Pages.ListExercises />
      </ExercisesContext.Provider>
    </>
  )
}
