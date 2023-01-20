import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { ExercisesContext } from 'store/context/ExercisesContext'
import * as S from './styles'

export const Exercises = () => {
  const { isLoading, exercises } = React.useContext(ExercisesContext)

  console.log(exercises)
  console.log(isLoading)

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <S.Container>
      <Molecules.TableComponent
        data={dataSource}
        columns={columns}
        title={'Listagem de Exercícios'}
      />
    </S.Container>
  )
}
