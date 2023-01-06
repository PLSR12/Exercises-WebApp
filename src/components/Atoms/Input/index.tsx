import React from 'react'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

export const InputComponent: React.FC<any> = React.forwardRef(
  ({ type, name, id, placeholder, label, error, ...props }, ref) => {
    return (
      <S.Container>
        <Form>
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              ref={ref}
              {...props}
              name={name}
              id={id || name}
              type={type || 'text'}
              placeholder={placeholder}
            />
          </Form.Group>
        </Form>
        {!!error && <ErrorMessage>{error?.message}</ErrorMessage>}
      </S.Container>
    )
  }
)

InputComponent.displayName = 'InputComponent'
