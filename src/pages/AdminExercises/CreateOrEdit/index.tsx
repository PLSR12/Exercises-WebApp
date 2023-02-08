import { yupResolver } from '@hookform/resolvers/yup'
import { Path } from 'common/config/pathsRoutes'
import { formatDataSelectComponent } from 'common/utils/formatDataSelect'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExerciseContext } from 'store/context/ExerciseContext'
import * as S from './styles'
import { ExerciseSchema } from './validations'

export const CreateOrEditExercise = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const exercise = location.state
  const [file, setFile] = React.useState<any>([])

  const { isLoading, categories, onSubmit, isCreate } = React.useContext(ExerciseContext)

  React.useEffect(() => {
    if (exercise) {
      reset(exercise)
    }
  }, [])

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(ExerciseSchema),
  })

  const OnSubmitForm = async (values: any) => {
    await onSubmit(values, file)
  }

  console.log(file)

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleCancel = () => {
    navigate(Path.ListExercises)
  }

  const handleDrop = (acceptedFiles: any[]) => {
    setFile(acceptedFiles.map((file) => file))
    if (exercise !== undefined) {
      //  exercise.image: ''
    }
  }

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isLoading} />
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
                defaultValue={exercise?.categoryId || 'Selecione uma Categoria'}
                options={formatDataSelectComponent(categories)}
                placeholder="Selecione uma Categoria:"
                error={errors.categoryId}
                onChange={(value: any) => setValue('categoryId', value)}
                onSearch={onSearch}
              />
            )}
          />
          <Atoms.InputImage
            handleDrop={handleDrop}
            file={file}
            label="Imagem do exercício"
            error={errors.file}
            {...register('file')}
          />
        </S.BoxAreaForm>
        <div className="buttonsStepper" style={{ marginTop: '40px' }}>
          <Atoms.ButtonComponent type="button" size={'large'} onClick={handleCancel}>
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
