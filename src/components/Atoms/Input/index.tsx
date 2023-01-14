import React from 'react'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

export const InputComponent: React.FC<any> = React.forwardRef(
  ({ type, name, id, placeholder, label, error, ...props }) => {
    return (
      <S.Container>
        <S.FormItemStyled htmlFor={name}>{label}</S.FormItemStyled>
        <S.InputStyled
          {...props}
          name={name}
          id={id || name}
          type={type || 'text'}
          placeholder={placeholder}
        />
        {!!error && <ErrorMessage>{error?.message}</ErrorMessage>}
      </S.Container>
    )
  }
)

InputComponent.displayName = 'InputComponent'
