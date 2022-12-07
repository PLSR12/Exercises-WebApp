import { BiTargetLock } from 'react-icons/bi'
import * as S from './styles'

export function Apresentation({ data }: any) {
  return (
    <S.Container>
      <section id="apresentacao" data-aos="fade-up" data-aos-duration="3000">
        <div className="informativo">
          <div className="options">
            <div style={{ marginTop: '20px' }}>
              <BiTargetLock size={70} />
            </div>
            <div>
              <h1>Objetivo</h1>
            </div>
            <div>
              <p>{data.objective}</p>
            </div>
          </div>
        </div>
      </section>
    </S.Container>
  )
}
