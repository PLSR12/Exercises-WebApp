import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 26vw;
  height: 40vh;
  flex-flow: column wrap;
  border: 2px solid #a3a3a3;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 80%);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 80vw;
    height: max-content;
    margin-top: 15px;
  }

  .container-iframe {
    display: flex;
    width: 26vw;
    height: 30vh;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 1024px) {
      min-width: 77vw;
      align-items: center;
      justify-content: center;
      min-height: 35vw;
    }
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 10%;
  padding: 15px;

  h1 {
    flex-wrap: wrap;
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`
