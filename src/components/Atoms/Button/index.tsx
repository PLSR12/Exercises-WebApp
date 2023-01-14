import * as S from './styles'

export const ButtonComponent = ({ children, type, ...props }: any) => {
  return (
    <S.ButtonStyled type={type || 'text'} {...props}>
      {children}
    </S.ButtonStyled>
  )
}
