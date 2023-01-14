import styled from 'styled-components'
import { Button } from 'antd'

export const ButtonStyled = styled(Button)`
  background-color: ${(props) => props.theme.color.orange};
  outline: none;
  color: ${(props) => props.theme.color.white};
  text-decoration: none;

  :hover {
    opacity: 0.9;
    color: ${(props) => props.theme.color.white};
  }
`
