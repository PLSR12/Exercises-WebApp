import * as Molecules from 'components/Molecules'
import React from 'react'
import { HomeContext } from 'store/context/HomeContext'
import * as S from './styles'

export const Home = () => {
  const { isLoading, categories, exercisesFiltered } = React.useContext(HomeContext)
  return (
    <>
      <S.Container>
        <Molecules.LoadingModal loading={isLoading} />
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
