import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  .title-container {
    display: grid;
    grid-template-columns: 28px 60px;
    margin-bottom: 35px;

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
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
