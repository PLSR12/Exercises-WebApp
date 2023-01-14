import { LockOutlined, UnlockOutlined, UserOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import { IUserInput } from 'models/IUser'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UserContext } from 'store/context/UserContext'
import * as S from './styles'
import { LogInSchema } from './validations'

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const { isOpen, onSubmit } = React.useContext(UserContext)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserInput>({
    resolver: yupResolver(LogInSchema),
  })

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const OnSubmitForm = async (clientData: IUserInput) => {
    await onSubmit(clientData)
  }

  return (
    <S.Container>
      <Molecules.LoadingModal loading={isOpen} />
      <S.ContainerItens>
        <form onSubmit={handleSubmit(OnSubmitForm)}>
          <div className="title-container">
            <h1>IN</h1>
            <h2>MOVE</h2>
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                label="Email:"
                placeholder="Digite um email válido"
                error={errors.email}
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Atoms.InputComponent
                {...field}
                type={showPassword ? 'text' : 'password'}
                label="Senha:"
                placeholder="Digite uma senha válida"
                error={errors.password}
                prefix={
                  showPassword ? (
                    <UnlockOutlined
                      className="site-form-item-icon"
                      onClick={() => handleShowPassword()}
                    />
                  ) : (
                    <LockOutlined
                      className="site-form-item-icon"
                      onClick={() => handleShowPassword()}
                    />
                  )
                }
              />
            )}
          />

          <Atoms.ButtonComponent htmlType="submit" style={{ marginTop: '50px' }}>
            Enviar
          </Atoms.ButtonComponent>
        </form>
      </S.ContainerItens>
    </S.Container>
  )
}
