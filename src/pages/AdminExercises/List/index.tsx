import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { ExercisesContext } from 'store/context/ExercisesContext'
import * as S from './styles'

export const ListExercises = () => {
  const {
    isLoading,
    modalConfirmIsOpen,
    handleConfirmOpened,
    exercises,
    handleNew,
    handleEdit,
    handleModalConfirmDelete,
    handleModalCancelDelete,
  } = React.useContext(ExercisesContext)

  const titleModalConfirmDelete = 'Excluir Exercício'
  const textModalDelete = 'Deseja realmente excluir o exercício?'

  const columns = [
    {
      title: 'Imagem',
      dataIndex: 'url',
      render: (t: any, r: any) => (
        <img src={`${r.url}`} alt={`${r.name} imagem`} style={{ width: '150px', height: '15vh' }} />
      ),
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Acões',
      dataIndex: 'operation',
      key: 'operation',
      render: (t: any, r: any) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEdit(r)} />
          <DeleteOutlined onClick={() => handleConfirmOpened(r)} />
        </Space>
      ),
    },
  ]

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isLoading} />
      <Molecules.ModalConfirm
        isModalOpen={modalConfirmIsOpen}
        handleOk={handleModalConfirmDelete}
        handleCancel={handleModalCancelDelete}
        title={titleModalConfirmDelete}
        text={textModalDelete}
        textOk={'Excluir'}
      />
      <Molecules.TableComponent
        data={exercises}
        columns={columns}
        title={'Exercícios'}
        subTitle={'Listagem de Exercícios'}
        extraButton={
          <>
            <Atoms.ButtonComponent onClick={handleNew}>
              Cadastrar <PlusOutlined />
            </Atoms.ButtonComponent>
          </>
        }
      />
    </S.Container>
  )
}
