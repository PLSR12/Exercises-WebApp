import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './styles'

export function Exercise() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const location = useLocation()
  const exercise = location.state
  const exerciseUrl = location.state.linkvideo.replace('watch?v=', 'embed/')
  // conversor para deixar url no padrão do iframe com o "embed" no lugar do watch

  setInterval(() => {
    setIsLoading(false)
  }, 2500)

  return (
    <>
      <S.Container>
        <Molecules.LoadingModal loading={isLoading} />
        <Molecules.Header data={[]} />
        <S.ContainerContent>
          <div className="container-name">
            <h1>{exercise.name}</h1>
            <div className="container-description">
              <p>{exercise.description}</p>
            </div>
          </div>
        </S.ContainerContent>
        <Molecules.Apresentation data={exercise} />
        <S.ContainerVideo>
          <iframe src={exerciseUrl} width="100%" height="100%"></iframe>
        </S.ContainerVideo>
      </S.Container>
    </>
  )
}
