import * as S from './styles'

export const ButtonComponent = ({ children, ...props }: any) => {
  return (
    <S.ButtonStyled variant="secondary" type="text" {...props}>
      {children}
    </S.ButtonStyled>
  )
}
