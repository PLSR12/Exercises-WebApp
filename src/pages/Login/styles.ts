import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 40%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title-container {
      display: grid;
      grid-template-columns: 28px 60px;
      margin-bottom: 35px;

      @media (min-width: 785px) {
        margin-left: 35%;
      }

      h1 {
        font-size: 46px;
        color: ${(props) => props.theme.color.orange};
      }
      h2 {
        margin-left: 15px;
        font-size: 46px;
        color: ${(props) => props.theme.color.primary_gray};
      }
    }
  }
`
