import * as S from './styles'

export const ButtonComponent = ({ children, ...props }: any) => {
  return <S.ButtonStyled {...props}>{children}</S.ButtonStyled>
}
