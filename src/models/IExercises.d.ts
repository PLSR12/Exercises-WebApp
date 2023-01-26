import { AllCategories } from 'models/ICategories'

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
  isOpen: boolean
  categories: AllCategories[]
  exercisesFiltered: AllExcercises[]
}

interface IExerciseContext {
  isLoading: boolean
  categories: AllCategories[]
  onSubmit: (values: any) => void
  isCreate: boolean
}

interface IExercisesListContext {
  isLoading: boolean
  exercises: AllExercises[]
  handleNew: () => void
  handleEdit: (data: any) => void
}

export { AllExercises, IExercisesContext, IExercisesListContext, IExerciseContext }
