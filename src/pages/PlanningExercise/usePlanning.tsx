import * as React from 'react'
import { exercisesDragDropMapper } from 'store/mapper/exercisesMapper'

export const usePlanning = ({ exercises }: any) => {
  const [allExercises, setAllExercises] = React.useState<any>([
    { groupName: 'Avaliable', exercises: [] },
    { groupName: 'Selected', exercises: [] },
  ])
  const [exercisesFiltered, setExercisesFiltered] = React.useState<any>([
    { groupName: 'Avaliable', exercises: [] },
    { groupName: 'Selected', exercises: [] },
  ])
  const [search, setSearch] = React.useState<string>('')
  const [category, setCategory] = React.useState<number | undefined>()

  React.useEffect(() => {
    setAllExercises([
      { groupName: 'Avaliable', exercises: exercisesDragDropMapper(exercises) },
      { groupName: 'Selected', exercises: [] },
    ])
    setExercisesFiltered([
      { groupName: 'Avaliable', exercises: exercisesDragDropMapper(exercises) },
      { groupName: 'Selected', exercises: [] },
    ])
  }, [exercises])

  const handleSearch = (searchData: any, state: any) => {
    const exercisesSearched = state.filter((product: any) => product.name.includes(searchData))
    setExercisesFiltered([
      { groupName: 'Avaliable', exercises: exercisesSearched },
      { groupName: 'Selected', exercises: exercisesFiltered[1].exercises },
    ])
  }

  const handleFilterPerCategory = () => {
    const filteredExercises = exercises.filter((exercise: any) => category === exercise.category_id)

    if (category !== undefined && category !== 0) {
      if (search !== '') {
        handleSearch(search, filteredExercises)
      } else {
        setExercisesFiltered([
          { groupName: 'Avaliable', exercises: filteredExercises },
          { groupName: 'Selected', exercises: exercisesFiltered[1].exercises },
        ])
      }
    } else {
      if (search !== '') {
        handleSearch(search, allExercises[0].exercises)
      } else {
        setExercisesFiltered([
          { groupName: 'Avaliable', exercises: allExercises[0].exercises },
          { groupName: 'Selected', exercises: exercisesFiltered[1].exercises },
        ])
      }
    }
  }

  const updatedProductsAvaliable = () => {
    handleFilterPerCategory()
  }

  const handleOnDragEnd = (val: any) => {
    const { draggableId, source, destination } = val

    const [sourceGroup] = exercisesFiltered.filter(
      (column: any) => column.groupName === source.droppableId
    )

    const [destinationGroup]: any = destination
      ? exercisesFiltered.filter((column: any) => column.groupName === destination.droppableId)
      : { ...sourceGroup }

    const [movingProduct] = sourceGroup.exercises.filter((t: any) => t.id === draggableId)

    const newSourceGroupExercises = sourceGroup.exercises.splice(source.index, 1)
    const newDestinationGroupExercises = destinationGroup.exercises.splice(
      destination.index,
      0,
      movingProduct
    )
    const newProductList = exercisesFiltered.map((column: any) => {
      if (column.groupName === source.groupName) {
        return {
          groupName: column.groupName,
          exercises: newSourceGroupExercises,
        }
      }
      if (column.groupName === destination.groupName) {
        return {
          groupName: column.groupName,
          exercises: newDestinationGroupExercises,
        }
      }
      return column
    })

    setExercisesFiltered(newProductList)
  }

  return {
    exercisesFiltered,
    updatedProductsAvaliable,
    handleOnDragEnd,
    setSearch,
    setCategory,
  }
}
