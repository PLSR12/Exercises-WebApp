import { AllExercises, IExercisesListContext } from 'models/IExercises'
import { Exercises } from 'pages/Exercises'
import * as React from 'react'
import { ExercisesService } from 'store/services'

export const ExercisesContext = React.createContext<IExercisesListContext>(
  {} as IExercisesListContext
)

export const ExercisesProvider = (children: any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [exercises, setExercises] = React.useState<AllExercises[]>([])

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
    getExercises()
  }, [])

  return (
    <>
      <ExercisesContext.Provider
        value={{
          isLoading,
          exercises,
        }}
      >
        <Exercises />
      </ExercisesContext.Provider>
    </>
  )
}
