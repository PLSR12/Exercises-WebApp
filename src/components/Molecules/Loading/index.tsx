import ImgLoading from 'common/assets/loading-exercise.gif'
import * as S from './styles'
import { loadingProps } from './types'

export function LoadingModal({ loading }: loadingProps) {
  return (
    <S.Container loading={loading}>
      <img src={ImgLoading} alt="loading-gif" />
      <h1 className="loading-text"> Carregando...</h1>
    </S.Container>
  )
}
