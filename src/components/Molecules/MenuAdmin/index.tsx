import { MenuUnfoldOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Path } from 'common/config/pathsRoutes'
import * as React from 'react'
import { BiCategory } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

export const MenuAdmin = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = React.useState(true)
  const [itemSelected, setItemSelected] = React.useState<string>('')
  const { pathname } = window.location

  React.useEffect(() => {
    const exercisesRoutes = [Path.ListExercises, Path.CreateExercise, Path.EditExercise]
    const categoriesRoutes = [Path.ListCategories, Path.CreateCategory, Path.EditCategory]

    if (exercisesRoutes.includes(pathname)) {
      setItemSelected('2')
    } else if (categoriesRoutes.includes(pathname)) {
      setItemSelected('3')
    }
  }, [pathname])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const redirectExercises = () => {
    navigate(Path.ListExercises)
  }

  const redirectCategories = () => {
    navigate(Path.ListCategories)
  }

  const items: MenuItem[] = [
    getItem('Menu', '1', <MenuUnfoldOutlined onClick={toggleCollapsed} />),
    getItem('Exercícios', '2', <CgGym onClick={redirectExercises} />),
    getItem('Categorias', '3', <BiCategory onClick={redirectCategories} />),
  ]

  return (
    <S.Container>
      <S.MenuStyled
        selectedKeys={[itemSelected]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </S.Container>
  )
}
