import { BsFillEmojiFrownFill } from 'react-icons/bs'
import * as S from './styles'

export const notFound = () => {
  return (
    <S.Container>
      <BsFillEmojiFrownFill size={250} />
      <h1>Página não encontrada</h1>
    </S.Container>
  )
}
