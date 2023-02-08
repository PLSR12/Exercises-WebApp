import { SearchOutlined } from '@ant-design/icons'
import { formatDataSelectComponent } from 'common/utils/formatDataSelect'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import { size } from 'lodash'
import * as React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { PlanningExerciseContext } from 'store/context/PlanningExerciseContext'
import * as S from './styles'
import { usePlanning } from './usePlanning'

export const PlanningExercise = () => {
  const { isLoading, categories, exercises } = React.useContext(PlanningExerciseContext)
  const { exercisesFiltered, updatedProductsAvaliable, handleOnDragEnd, setSearch, setCategory } =
    usePlanning({ exercises })

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isLoading} />
      <h1>Montar Treino </h1>
      <S.BoxAreaChooseExercise>
        <div className="filter-camp">
          <p className="subTitle">Filtro:</p>
          <Atoms.SelectComponent
            options={formatDataSelectComponent(categories)}
            label="Por Categoria:"
            onChange={(value: any) => setCategory(value)}
            defaultValue={'Todos'}
          />
          <Atoms.InputComponent
            label="Por Nome:"
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <Atoms.ButtonComponent style={{ marginTop: '30px' }} onClick={updatedProductsAvaliable}>
            Filtrar
            <SearchOutlined />
          </Atoms.ButtonComponent>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="list-all-exercises">
            <p className="subTitle">
              Exercícios Disponíveis:
              {size(exercisesFiltered[0]?.exercises)}
            </p>

            <Molecules.DragDrop
              className="avaliable"
              droppableId="Avaliable"
              list={exercisesFiltered[0]?.exercises}
              type="EXERCISE"
            />
          </div>

          <div className="list-all-exercises">
            <p className="subTitle">
              Exercícios Selecionados: {size(exercisesFiltered[1]?.exercises)}
            </p>

            <Molecules.DragDrop
              className="selected"
              droppableId="Selected"
              list={exercisesFiltered[1]?.exercises}
              type="EXERCISE"
            />
          </div>
        </DragDropContext>
      </S.BoxAreaChooseExercise>
    </S.Container>
  )
}
