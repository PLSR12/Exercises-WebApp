import { AuditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'store/context/UserContext'
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

  const redirectAdmin = () => {
    navigate('/admin')
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
    getInitials(user.name)
  }, [user])

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
              <h4>{user?.name}</h4>
              <p>{user?.email}</p>
            </S.HeaderProfile>

            <S.BodyProfile>
              <button type="button" disabled>
                <UserOutlined /> <p>Perfil</p>
              </button>
            </S.BodyProfile>
            {user.admin && (
              <S.FooterProfile>
                <button type="button" onClick={() => redirectAdmin()}>
                  <AuditOutlined /> <p>Admin</p>
                </button>
              </S.FooterProfile>
            )}

            <S.FooterProfile>
              <button type="button" className="btnLogout" onClick={() => logoutUser()}>
                <LogoutOutlined /> <p>Sair</p>
              </button>
            </S.FooterProfile>
          </S.ProfileContainer>
        </S.NavProfileOpitions>
      </>
    </S.Container>
  )
}

export default UserConfig
