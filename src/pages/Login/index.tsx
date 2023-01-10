import { yupResolver } from '@hookform/resolvers/yup'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import { UserContext } from 'context/UserContext'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'
import { LogInSchema } from './validations'

export const Login = () => {
  const { isOpen, onSubmit } = React.useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(LogInSchema),
  })

  const OnSubmitForm = async (clientData: any) => {
    await onSubmit(clientData)
  }

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isOpen} />
      <S.ContainerItens>
        <div className="title-container">
          <h1>IN</h1>
          <h2>MOVE</h2>
        </div>
        <form onSubmit={handleSubmit(OnSubmitForm)}>
          <Atoms.InputComponent
            label="Email:"
            placeholder="Digite um email válido"
            {...register('email')}
            error={errors.email}
          />
          <Atoms.InputComponent
            type="password"
            label="Senha:"
            placeholder="Digite uma senha válida"
            {...register('password')}
            error={errors.password}
          />

          <Atoms.ButtonComponent type="submit" size="lg" style={{ marginTop: '50px' }}>
            {' '}
            Enviar
          </Atoms.ButtonComponent>
        </form>
      </S.ContainerItens>
    </S.Container>
  )
}
