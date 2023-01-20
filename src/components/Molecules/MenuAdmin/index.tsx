import { DesktopOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Path } from 'common/config/pathsRoutes'
import React, { useState } from 'react'
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
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const redirectExercises = () => {
    navigate(Path.ListExercises)
  }

  const items: MenuItem[] = [
    getItem('Menu', '1', <MenuUnfoldOutlined onClick={toggleCollapsed} />),
    getItem('Exercícios', '2', <PieChartOutlined onClick={redirectExercises} />),
    getItem('Categorias', '3', <DesktopOutlined />),
  ]

  return (
    <S.Container>
      <S.MenuStyled
        defaultSelectedKeys={['2']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </S.Container>
  )
}
