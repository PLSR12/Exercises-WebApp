import { map } from 'lodash'

export const exercisesListMapper = (data: any): any => {
  return map(data, (exercise: any) => ({
    id: exercise.id,
    name: exercise.name,
    category: exercise.category.name,
    url: exercise.url,
    description: exercise.description,
    objective: exercise.objective,
    linkvideo: exercise.linkvideo,
    categoryId: exercise.category.id,
  }))
}
