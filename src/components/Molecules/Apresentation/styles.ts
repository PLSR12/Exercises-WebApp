import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-shadow: 5px rgba(0, 0, 0, 0.575);

  #apresentacao {
    background-color: #eaeaea;
  }
  .informativo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    height: 300px;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin: 0px 10px;
  }
  .informativo h1 {
    font-size: 17px;
    padding-top: 25px;
    text-align: center;
  }
  .informativo p {
    font-size: 16px;
    padding-top: 15px;
  }

  @media (max-width: 1024px) {
    .informativo {
      display: flex;
      flex-direction: column;
      margin: auto;
      height: auto;
      padding-bottom: 30px;
    }
    .informativo p {
      text-align: center;
    }
  }

  @media (max-width: 548px) {
    .informativo {
      height: auto;
    }
    .options {
      width: 250px;
    }
    .informativo h1 {
      font-size: 15px;
    }
    .informativo p {
      font-size: 13px;
      padding-top: 15px;
    }
  }
  @media (max-width: 375px) {
    .informativo {
      height: auto;
    }
    .options {
      width: 200px;
    }
    .informativo h1 {
      font-size: 12px;
    }
    .informativo p {
      font-size: 11px;
      padding-top: 15px;
    }
  }
`
