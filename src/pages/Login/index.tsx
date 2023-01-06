import * as Atoms from 'components/Atoms'
import { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import * as S from './styles'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  }
  return (
    <S.Container>
      <S.ContainerForm>
        <div className="title-container">
          <h1>IN</h1>
          <h2>MOVE</h2>
        </div>
        <form>
          <Atoms.Input label="Email:" />
          <S.Label> Senha:</S.Label>
          <div>
            <S.Input type={showPassword ? 'text' : 'password'} />
            <span>
              {showPassword ? (
                <MdVisibility
                  color="#c4cdd5"
                  size={22}
                  onClick={handleShowPassword}
                  className="iconVisiblity"
                />
              ) : (
                <MdVisibilityOff
                  color="#c4cdd5"
                  size={22}
                  onClick={handleShowPassword}
                  className="iconVisiblity"
                />
              )}
            </span>
          </div>
        </form>
      </S.ContainerForm>
    </S.Container>
  )
}
