import { AllExercises } from 'models/IExercises'
import { AllCategories } from 'models/ICategories'

interface IPlanningExerciseContext {
  exercises: AllExercises[]
  isLoading: boolean
  categories: AllCategories[]
}

export { IPlanningExerciseContext }
