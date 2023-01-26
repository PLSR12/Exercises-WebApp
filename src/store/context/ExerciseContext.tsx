import { AllCategories } from 'models/ICategories'
import { IExerciseContext } from 'models/IExercises'
import * as Pages from 'pages'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { CategoryService } from 'store/services'

export const ExerciseContext = React.createContext<IExerciseContext>({} as IExerciseContext)

export const ExerciseProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [categories, setCategories] = React.useState<AllCategories[]>([])
  const { id } = useParams<{ id: string }>()
  const isCreate: boolean = !id ? true : false
  const splitedId = id?.split(':')[1]

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

  const onSubmit = async (values: any) => {
    // const { name, active, code } = values

    setIsLoading(true)
    console.log(values)
    /*
    if (!isCreate) DiscountFinisherForm.id = splitedId

    const action = isCreate ? DiscountFinisherService.insert : DiscountFinisherService.update

    await action(DiscountFinisherForm)
      .then(() => {
        setIsLoading(false)
        setTimeout(() => {
          history.push(`${brand.path}/finishers`)
        }, 500)
      })
      .finally(() => {
        setIsLoading(false)
      })
      */
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
