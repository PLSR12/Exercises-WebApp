import * as Molecules from 'components/Molecules'
import * as S from './styles'

export const TemplateHome = ({ children, categories }: any) => {
  return (
    <S.Container>
      <Molecules.Header data={categories} />
      <S.ContainerItems>{children}</S.ContainerItems>
    </S.Container>
  )
}
