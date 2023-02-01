import { AllCategories } from 'models/ICategories'
import { IListContext } from 'models/IContexts'

interface AllExercises {
  url: string
  id: number
  name: string
  description: string
  objective: string
  path: string
  linkvideo: string
  category_id: number
  category: {
    id: number
    name: string
  }
}

interface IExercisesContext {
  isLoading: boolean
  categories: AllCategories[]
  exercisesFiltered: AllExcercises[]
}

interface IExerciseContext {
  isLoading: boolean
  categories: AllCategories[]
  onSubmit: (values: any, file: any) => void
  isCreate: boolean
}

interface IExercisesListContext extends IListContext {
  exercises: AllExercises[]
}

export { AllExercises, IExercisesContext, IExercisesListContext, IExerciseContext }
