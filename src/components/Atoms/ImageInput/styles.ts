import styled from 'styled-components'
import { Form } from 'antd'

export const Container = styled.div``

export const FormItemStyled = styled(Form.Item)`
  display: block;
  padding: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0px;
`
export const Error = styled.div`
  color: var(--color-primary-first-light);
  margin: 5px 0 0 5px;
`
