import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const ContainerVideo = styled.div`
  width: 100%;
  height: 800px;
  padding: 20px 60px;

  @media screen and (max-width: 780px) {
    width: 100%;
    height: 60vw;
    padding: 10px;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  padding: 4vw;
  margin-top: 70px;

  .container-name {
    align-items: left;
    h1 {
      font-weight: bold;
      font-size: 4rem;
      color: ${(props) => props.theme.color.black};
      text-align: left;
    }
    .container-description {
      padding: 20px;
      align-items: center;
      p {
        font-size: 1rem;
        color: ${(props) => props.theme.color.black};
        text-align: center;
      }
    }
  }
`
