import { AuditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Path } from 'common/config/pathsRoutes'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { CgGym } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'store/context/UserContext'
import { StorageService } from 'store/services'
import * as S from './styles'

interface UserConfigProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const UserConfig = ({ isVisible, setIsVisible }: UserConfigProps) => {
  const thumbProfileRef = useRef<HTMLButtonElement>(null)
  const menuProfileRef = useRef<HTMLDivElement>(null)
  const [initials, setInitials] = useState<string>('')
  const navigate = useNavigate()
  const { logoutUser, user } = useContext(UserContext)
  const userParsed = StorageService.getDataUser()

  const keyPress = useCallback(
    (e: { key: string }) => {
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false)
      }
    },
    [setIsVisible, isVisible]
  )

  const showMenuProfile: any = (e: any) => {
    if (thumbProfileRef.current && !thumbProfileRef.current.contains(e.target)) {
      setIsVisible(false)
    }
  }
  function getInitials(name: string) {
    if (!name) {
      return ''
    }
    const parts = name.split(' ')
    const initialsGetted =
      parts.length >= 2
        ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
        : `${name[0]}${name[1]}`.toUpperCase()
    setInitials(initialsGetted)
  }
  const changeVisibility = () => {
    setIsVisible(!isVisible)
  }

  const redirectToAdmin = () => {
    navigate(Path.ListExercises)
  }

  const redirectToPlanningExercise = () => {
    navigate(Path.PlanningExercise)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    document.addEventListener('click', showMenuProfile, true)

    return () => {
      document.removeEventListener('keydown', keyPress)
      document.removeEventListener('click', showMenuProfile, true)
    }
  }, [keyPress])

  useEffect(() => {
    getInitials(userParsed?.name || '')
  }, [userParsed])

  return (
    <S.Container>
      <>
        <S.ThumbUserLogged onClick={() => changeVisibility()} ref={thumbProfileRef}>
          <p>{initials}</p>
        </S.ThumbUserLogged>

        <S.NavProfileOpitions
          isVisible={isVisible}
          ref={menuProfileRef}
          onClick={() => setIsVisible(true)}
        >
          <S.ProfileContainer>
            <S.HeaderProfile>
              <h4>{userParsed?.name}</h4>
              <p>{userParsed?.email}</p>
            </S.HeaderProfile>

            <S.BodyProfile>
              <button type="button" disabled>
                <UserOutlined /> Perfil
              </button>
            </S.BodyProfile>
            <S.BodyProfile>
              <button type="button" onClick={redirectToPlanningExercise}>
                <CgGym /> Montar Treino
              </button>
            </S.BodyProfile>
            {userParsed?.admin && (
              <S.BodyProfile>
                <button type="button" onClick={redirectToAdmin}>
                  <AuditOutlined /> Admin
                </button>
              </S.BodyProfile>
            )}

            <S.BodyProfile>
              <button type="button" className="btnLogout" onClick={logoutUser}>
                <LogoutOutlined /> Sair
              </button>
            </S.BodyProfile>
          </S.ProfileContainer>
        </S.NavProfileOpitions>
      </>
    </S.Container>
  )
}

export default UserConfig
