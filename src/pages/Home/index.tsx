import * as Molecules from 'components/Molecules'
import { MenuContext } from 'context/menuContext'
import * as React from 'react'
import { CategoryService, ExerciseService } from 'services'
import * as S from './styles'

export function Home() {
  const [modalLoadingIsOpen, setModalLoadingIsOpen] = React.useState<boolean>(true)
  const [categories, setCategories] = React.useState<any[]>([])
  const [exercises, setExercises] = React.useState<any[]>([])
  const [exercisesFiltered, setExercisesFiltered] = React.useState<any[]>([])
  const { categorySelected } = React.useContext(MenuContext)

  async function getCategories() {
    try {
      setModalLoadingIsOpen(true)
      const allCategories: any = await CategoryService.getAll()
      const newCategory: any = [{ id: 0, name: 'Todos' }, ...allCategories]

      setCategories(newCategory)
      setModalLoadingIsOpen(false)
    } catch {
      setModalLoadingIsOpen(false)
    }
  }

  async function getExercises() {
    try {
      setModalLoadingIsOpen(true)
      const allExercises: any = await ExerciseService.getAll()
      setExercises(allExercises)
      setExercisesFiltered(allExercises)
      setModalLoadingIsOpen(false)
    } catch {
      setModalLoadingIsOpen(false)
    }
  }

  function getExercisesFiltered() {
    if (categorySelected === 0) {
      setExercisesFiltered(exercises)
    } else if (categorySelected !== 0) {
      const exercisesFiltered = exercises.filter(
        (exercise: any) => categorySelected === exercise.category_id
      )
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

  console.log(exercises)
  console.log(exercisesFiltered, 'filtrado')

  return (
    <>
      <S.Container>
        <h1>HOME</h1>
        <Molecules.LoadingModal loading={modalLoadingIsOpen} />
        <Molecules.Header data={categories} />
        <S.ExercisesContainer>
          {exercisesFiltered.map((exercise) => (
            <Molecules.CardExercise key={exercise.id} data={exercise} />
          ))}
        </S.ExercisesContainer>
      </S.Container>
    </>
  )
}
