import styled from 'styled-components'
import { Input, Form } from 'antd'
const { TextArea } = Input

export const Container = styled.div`
  margin-top: 8px;
`

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

export const TextAreaStyled = styled(TextArea)`
  height: 38px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.black};
  font-size: 16px;

  &:hover::placeholder {
    color: #919eab;
  }

  &:hover {
    border-color: ${(props) => props.theme.color.black};
  }

  &::placeholder {
    color: #c4cdd5;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.color.black};
  }

  &:disabled {
    background-color: #dcd4d4;
  }
`
