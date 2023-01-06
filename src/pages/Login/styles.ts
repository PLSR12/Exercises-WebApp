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
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 47vh;
    height: 17vh;
  }
`

export const Label = styled.p`
  margin-top: 17px;
  margin-bottom: 3px;
  display: block;
  padding: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
  letter-spacing: 0em;
  text-align: left;
`

export const Input = styled.input`
  height: 38px;
  width: 100%;
  padding: 14px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.black};
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 16px;

  &:hover::placeholder {
    color: #919eab;
  }

  &:hover {
    border-color: ${(props) => props.theme.color.black};
  }

  &::placeholder {
    color: #c4cdd5;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.color.black};
  }

  &:disabled {
    background-color: #dcd4d4;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex: 1 1 0%;
      svg {
        position: absolute;
        left: 12px;
        top: 5px;
      }
      span {
        position: absolute;
        right: 0;
        cursor: pointer;
        .iconVisiblity {
          position: relative;
          right: 0;
          top: 5px;
          bottom: 0;
          left: 0;
          transform: translateX(-12px) translateY(-16px);
          transition: all 0.5s ease;
          :hover {
            fill: #000;
          }
        }
      }
    }
  }
`
