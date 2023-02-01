import { yupResolver } from '@hookform/resolvers/yup'
import { Path } from 'common/config/pathsRoutes'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { CategoryContext } from 'store/context/CategoryContext'
import * as S from './styles'
import { CategorySchema } from './validations'

export const CreateOrEditCategory = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const category = location.state
  const { isLoading, onSubmit, isCreate } = React.useContext(CategoryContext)

  React.useEffect(() => {
    if (category) {
      reset(category)
    }
  }, [])

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(CategorySchema),
  })

  const OnSubmitForm = async (values: any) => {
    await onSubmit(values)
  }

  const handleCancel = () => {
    navigate(Path.ListCategories)
  }

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isLoading} />
      <h1>{isCreate ? 'Cadastro de Categoria' : 'Edição de Categoria'}</h1>
      <form onSubmit={handleSubmit(OnSubmitForm)}>
        <S.BoxAreaForm>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                label="Nome:"
                placeholder="Digite um nome para a categoria"
                error={errors.name}
              />
            )}
          />
        </S.BoxAreaForm>
        <div className="buttonsStepper" style={{ marginTop: '40px' }}>
          <Atoms.ButtonComponent
            type="button"
            style={{ width: '90px' }}
            size={'large'}
            onClick={handleCancel}
          >
            Cancelar
          </Atoms.ButtonComponent>

          <Atoms.ButtonComponent type="submit" size={'large'}>
            {isCreate ? 'Cadastrar' : 'Editar'}
          </Atoms.ButtonComponent>
        </div>
      </form>
    </S.Container>
  )
}
