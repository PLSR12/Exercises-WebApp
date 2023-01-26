import * as S from './styles'

export const ButtonComponent = ({ children, type, ...props }: any) => {
  return (
    <S.ButtonStyled htmlType={type} {...props}>
      {children}
    </S.ButtonStyled>
  )
}
