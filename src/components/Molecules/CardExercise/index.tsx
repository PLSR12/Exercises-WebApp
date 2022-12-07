import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function CardExercise({ data }: any) {
  const navigate = useNavigate()
  console.log(data)

  const handleExercise = () => {
    navigate('/exercise', { state: data })
  }
  return (
    <>
      <S.Container onClick={handleExercise}>
        <div className="container-iframe">
          <iframe
            width="100%"
            height="100%"
            src={data.url}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
        </div>

        <p>{data.name}</p>
      </S.Container>
    </>
  )
}
