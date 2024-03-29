import * as Molecules from 'components/Molecules'
import * as S from './styles'

export const TemplateAdmin = ({ children }: any) => {
  return (
    <S.Container>
      <Molecules.MenuAdmin />
      <S.ContainerItems>{children}</S.ContainerItems>
    </S.Container>
  )
}
