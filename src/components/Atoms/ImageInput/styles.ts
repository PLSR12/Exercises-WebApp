import styled from 'styled-components'
import { Form } from 'antd'

export const Container = styled.div`
  .dropzone {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-width: 2px;
    border-radius: 2px;
    border: 2px #8f8f8f dashed;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;

    p {
      font-size: 15px;
      color: #000000;
    }
  }
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
export const Error = styled.div`
  color: var(--color-primary-first-light);
  margin: 5px 0 0 5px;
`
