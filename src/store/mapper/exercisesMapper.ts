import { map } from 'lodash'

export const exercisesListMapper = (data: any): any => {
  return map(data, (exercise: any) => ({
    id: exercise.id,
    name: exercise.name,
    category: exercise.category.name,
    url: exercise.url,
  }))
}
