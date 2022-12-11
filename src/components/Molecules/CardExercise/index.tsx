import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function CardExercise({ data }: any) {
  const navigate = useNavigate()

  const handleExercise = () => {
    navigate('/exercise', { state: data })
  }
  const exerciseUrl = data.url.replace('watch?v=', 'embed/')

  return (
    <>
      <S.Container onClick={handleExercise}>
        <div className="container-iframe">
          <img src={exerciseUrl} alt={`${data.name} imagem`}></img>
        </div>
        <hr></hr>
        <S.ContainerText>
          <h1>{data.name}</h1>
        </S.ContainerText>
      </S.Container>
    </>
  )
}
