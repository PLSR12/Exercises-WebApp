import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { Path } from 'common/config/pathsRoutes'
import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { ExercisesContext } from 'store/context/ExercisesContext'
import * as S from './styles'

export const Exercises = () => {
  const navigate = useNavigate()
  const { isLoading, exercises } = React.useContext(ExercisesContext)
  const [data, setData] = React.useState<any[]>([])

  React.useEffect(() => {
    setData(exercises)
  }, [exercises])

  const columns = [
    {
      title: 'Image',
      dataIndex: 'url',
      render: (t: any, r: any) => (
        <img src={`${r.url}`} alt={`${r.name} imagem`} style={{ width: '150px', height: '15vh' }} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <EditOutlined onClick={() => navigate(Path.EditExercise)} />
          <DeleteOutlined />
        </Space>
      ),
    },
  ]

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isLoading} />
      <Molecules.TableComponent data={data} columns={columns} title={'Listagem de Exercícios'} />
    </S.Container>
  )
}