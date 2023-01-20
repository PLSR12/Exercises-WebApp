import styled from 'styled-components'
import { Menu } from 'antd'

export const Container = styled.div``

export const MenuStyled = styled(Menu)`
  background: ${(props) => props.theme.color.orange};
  width: max-content;
  height: 100%;

  .ant-menu-item {
    color: ${(props) => props.theme.color.white};
  }

  .ant-menu-item-selected {
    background-color: ${(props) => props.theme.color.primary_gray} !important;
  }
`
