import { MenuContext } from 'context/menuContext'
import { map } from 'lodash'
import { useContext, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function Header({ data }: any) {
  const [showNav, setShowNav] = useState(false)
  const navigate = useNavigate()
  const { setCategorySelected } = useContext(MenuContext)
  return (
    <>
      <S.MainContainer>
        <S.ContainerLeft>
          <div className="title-container" onClick={() => navigate('/')}>
            <h1>IN</h1>
            <h2>MOVE</h2>
          </div>
          <S.Nav>
            {map(data, (category: any, index: number) => {
              return (
                <a key={index} onClick={() => setCategorySelected(category.id)}>
                  {category.name}
                </a>
              )
            })}
          </S.Nav>
        </S.ContainerLeft>
        <S.ContainerRight></S.ContainerRight>
        <S.MenuHamburguer>
          <FiMenu onClick={() => setShowNav(!showNav)} />
          {showNav && (
            <nav className={`navHamburguer ${showNav ? 'navTrue' : 'navFalse'}`}>
              {map(data, (category: any, index: number) => {
                return (
                  <li key={index}>
                    <a key={index} onClick={() => setCategorySelected(category.id)}>
                      {category.name}
                    </a>
                  </li>
                )
              })}
            </nav>
          )}
        </S.MenuHamburguer>
      </S.MainContainer>
    </>
  )
}
