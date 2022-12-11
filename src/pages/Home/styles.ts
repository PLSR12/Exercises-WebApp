import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`
export const ExercisesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10vh;
  gap: 3vw;
  padding: 4vw;

  .nothing-exercise {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
      font-size: 45px;
      font-weight: bold;
    }
  }
`
