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

export { AllExercises, IExercisesContext }
