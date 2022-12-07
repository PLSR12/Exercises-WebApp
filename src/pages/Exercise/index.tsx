import * as Molecules from 'components/Molecules'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './styles'

export function Exercise() {
  const [modalLoadingIsOpen, setModalLoadingIsOpen] = React.useState<boolean>(true)
  const location = useLocation()
  const exercise = location.state

  setInterval(() => {
    setModalLoadingIsOpen(false)
  }, 1500)

  return (
    <>
      <S.Container>
        <Molecules.LoadingModal loading={modalLoadingIsOpen} />
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
          <iframe src={exercise.url} width="100%" scrolling="no" height="100%"></iframe>
        </S.ContainerVideo>
      </S.Container>
    </>
  )
}
