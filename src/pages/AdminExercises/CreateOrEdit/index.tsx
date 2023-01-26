import { Path } from 'common/config/pathsRoutes'
import { formatDataSelectComponent } from 'common/utils/formatDataSelect'
import * as Atoms from 'components/Atoms'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExerciseContext } from 'store/context/ExerciseContext'
import * as S from './styles'

export const CreateOrEditExercise = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const exercise = location.state
  const { isLoading, categories, onSubmit, isCreate } = React.useContext(ExerciseContext)
  console.log(exercise)

  React.useEffect(() => {
    if (exercise) {
      reset(exercise)
    }
  }, [])

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({})

  const OnSubmitForm = async (values: any) => {
    await onSubmit(values)
  }

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleCancel = () => {
    navigate(Path.ListExercises)
  }

  return (
    <S.Container>
      <h1>{isCreate ? 'Cadastro de Exercício' : 'Edição de Exercício'}</h1>
      <form onSubmit={handleSubmit(OnSubmitForm)}>
        <S.BoxAreaForm>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                label="Nome:"
                placeholder="Digite um nome para o exercício"
                error={errors.name}
              />
            )}
          />
          <Controller
            name="linkvideo"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                label="Link do Vídeo:"
                placeholder="Digite um link de vídeo do exercício"
                error={errors.linkvideo}
              />
            )}
          />
          <Controller
            name="objective"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                label="Objetivo do Exercício:"
                placeholder="Digite o objetivo final do exercício"
                error={errors.objective}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Atoms.TextAreaComponent
                {...field}
                label="Descrição:"
                placeholder="Digite a descrição do exercício"
                error={errors.description}
                rows={4}
              />
            )}
          />

          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Atoms.SelectComponent
                {...field}
                label="Categoria"
                options={formatDataSelectComponent(categories)}
                placeholder="Selecione uma Categoria:"
                error={errors.categoryId}
                onChange={onChange}
                onSearch={onSearch}
              />
            )}
          />
        </S.BoxAreaForm>
        <div className="buttonsStepper" style={{ marginTop: '40px' }}>
          <Atoms.ButtonComponent type="button" size={'large'} onClick={handleCancel}>
            Cancelar
          </Atoms.ButtonComponent>

          <Atoms.ButtonComponent type="submit" size={'large'}>
            {isCreate ? 'Criar' : 'Editar'}
          </Atoms.ButtonComponent>
        </div>
      </form>
    </S.Container>
  )
}
