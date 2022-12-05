import * as S from './styles'

export function CardExercise({ data }: any) {
  console.log(data)
  return (
    <>
      <S.Container>
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
