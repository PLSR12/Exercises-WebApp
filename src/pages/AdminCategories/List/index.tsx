import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { CategoriesContext } from 'store/context/CategoriesContext'
import * as S from './styles'

export const ListCategories = () => {
  const {
    isLoading,
    modalConfirmIsOpen,
    handleConfirmOpened,
    categories,
    handleNew,
    handleEdit,
    handleModalConfirmDelete,
    handleModalCancelDelete,
  } = React.useContext(CategoriesContext)

  const titleModalConfirmDelete = 'Excluir Categoria'
  const textModalDelete = 'Deseja realmente excluir a categoria?'

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
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
        data={categories}
        columns={columns}
        title={'Categorias'}
        subTitle={'Listagem de Categorias'}
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
