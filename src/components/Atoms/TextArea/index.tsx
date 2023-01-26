import React from 'react'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

export const TextAreaComponent: React.FC<any> = React.forwardRef(
  ({ type, name, id, placeholder, label, error, rows, ...props }, ref) => {
    return (
      <S.Container>
        <S.FormItemStyled htmlFor={name}>{label}</S.FormItemStyled>
        <S.TextAreaStyled
          {...props}
          rows={rows}
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

TextAreaComponent.displayName = 'TextAreaComponent'
