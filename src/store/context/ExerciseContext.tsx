import { Path } from 'common/config/pathsRoutes'
import { AllCategories } from 'models/ICategories'
import { IExerciseContext } from 'models/IExercises'
import * as Pages from 'pages'
import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryService, ExercisesService } from 'store/services'

export const ExerciseContext = React.createContext<IExerciseContext>({} as IExerciseContext)

export const ExerciseProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [categories, setCategories] = React.useState<AllCategories[]>([])
  const { id } = useParams<{ id: string }>()
  const isCreate: boolean = !id ? true : false
  const splitedId = id?.split(':')[1]
  const navigate = useNavigate()

  const getCategories = async () => {
    try {
      setIsLoading(true)
      const allCategories: any = await CategoryService.getAll()

      setCategories(allCategories)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (values: any, file: any) => {
    const { name, objective, linkvideo, categoryId, description } = values

    console.log(values)

    const exerciseFormData: any = new FormData()

    exerciseFormData.append('name', name)
    exerciseFormData.append('objective', objective)
    exerciseFormData.append('linkvideo', linkvideo)
    exerciseFormData.append('category_id', categoryId)
    exerciseFormData.append('description', description)
    exerciseFormData.append('file', file)

    if (!isCreate) exerciseFormData.id = splitedId

    const action = isCreate ? ExercisesService.insert : ExercisesService.update

    setIsLoading(true)
    await action(exerciseFormData)
      .then(() => {
        setIsLoading(false)
        setTimeout(() => {
          navigate(Path.ListExercises)
        }, 500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <ExerciseContext.Provider
        value={{
          isLoading,
          categories,
          onSubmit,
          isCreate,
        }}
      >
        <Pages.CreateOrEditExercise />
      </ExerciseContext.Provider>
    </>
  )
}
