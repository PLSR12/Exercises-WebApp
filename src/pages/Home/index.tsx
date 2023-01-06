import * as Molecules from 'components/Molecules'
import { HomeContext } from 'context/HomeContext'
import React from 'react'
import * as S from './styles'

export const Home = () => {
  const { isOpen, categories, exercisesFiltered } = React.useContext(HomeContext)
  return (
    <>
      <S.Container>
        <Molecules.LoadingModal loading={isOpen} />
        <Molecules.Header data={categories} />
        <S.ExercisesContainer>
          {exercisesFiltered.length > 0 ? (
            exercisesFiltered.map((exercise) => (
              <Molecules.CardExercise key={exercise.id} data={exercise} />
            ))
          ) : (
            <div className="nothing-exercise">
              <p>Nenhum exercício nessa categoria</p>
            </div>
          )}
        </S.ExercisesContainer>
      </S.Container>
    </>
  )
}
