import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Meta } = Card

export function CardExercise({ data }: any) {
  const navigate = useNavigate()

  const handleExercise = () => {
    navigate('/exercise', { state: data })
  }
  const exerciseUrl = data.url.replace('watch?v=', 'embed/')

  return (
    <>
      <Card
        style={{ height: 'min-content' }}
        hoverable
        cover={
          <img
            src={exerciseUrl}
            alt={`${data.name} imagem`}
            style={{ width: '300px', height: '30vh' }}
          />
        }
        onClick={handleExercise}
      >
        <Meta title={data.name} description={data.objective} />
      </Card>
    </>
  )
}
