import { filter } from 'lodash'
import { AllCategories } from 'models/ICategories'
import { AllExercises, IExercisesContext } from 'models/IExercises'
import * as Pages from 'pages'
import * as React from 'react'
import { CategoryService, ExercisesService } from 'store/services'
import { MenuContext } from './menuContext'

export const HomeContext = React.createContext<IExercisesContext>({} as IExercisesContext)

export const HomeProvider = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [categories, setCategories] = React.useState<AllCategories[]>([])
  const [exercises, setExercises] = React.useState<AllExercises[]>([])
  const [exercisesFiltered, setExercisesFiltered] = React.useState<AllExercises[]>([])
  const { categorySelected } = React.useContext(MenuContext)

  const getCategories = async () => {
    try {
      setIsOpen(true)
      const allCategories: any = await CategoryService.getAll()
      const newCategory: any = [{ id: 0, name: 'Todos' }, ...allCategories]

      setCategories(newCategory)
      setIsOpen(false)
    } catch {
      setIsOpen(false)
    }
  }

  const getExercises = async () => {
    try {
      setIsOpen(true)
      const allExercises: any = await ExercisesService.getAll()
      setExercises(allExercises)
      setExercisesFiltered(allExercises)
      setIsOpen(false)
    } catch {
      setIsOpen(false)
    }
  }

  const getExercisesFiltered = async () => {
    if (categorySelected === 0) {
      setExercisesFiltered(exercises)
    } else if (categorySelected !== 0) {
      const exercisesFiltered = filter(exercises, { category_id: categorySelected })
      setExercisesFiltered(exercisesFiltered)
    }
  }

  React.useEffect(() => {
    getExercisesFiltered()
  }, [categorySelected])

  React.useEffect(() => {
    getCategories()
    getExercises()
  }, [])

  return (
    <>
      <HomeContext.Provider
        value={{
          isOpen,
          categories,
          exercisesFiltered,
        }}
      >
        <Pages.Home />
      </HomeContext.Provider>
    </>
  )
}
