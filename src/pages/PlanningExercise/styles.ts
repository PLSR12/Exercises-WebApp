import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.color.background_paper};
  padding: 7%;
`

export const BoxAreaChooseExercise = styled.div`
  display: grid;
  margin: auto;
  padding: auto;
  grid-template-columns: 1fr 2fr 2fr;
  justify-content: center;
  margin: 45px 5% auto;
  gap: 40px;

  .subTitle {
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme.color.black};
  }

  .filter-camp {
    flex-direction: column;
    column-gap: 20px;
    margin-left: -40px;
    margin-right: 20px;
    width: 270px;
    height: min-content;
  }
  .list-all-exercises {
    width: fit-content;
    height: min-content;

    li {
      list-style: none;
      padding: 20px;
      background: ${(props) => props.theme.color.orange};
      margin-top: 20px;
      text-align: left;
      margin: 20px auto;
      color: none;
      width: 250px;
      height: fit-content;
      p {
        font-size: 14px;
      }
    }

    ul {
      border-radius: ${(props) => props.theme.borderRadius.small};
      border: 1px solid ${(props) => props.theme.color.primary_gray};
      justify-content: center;
      align-items: center;
      padding: 40px;
      width: 350px;
      height: 550px;
      overflow: scroll;
      overflow-x: hidden;

      ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.color.orange};
      }
      ::-webkit-scrollbar {
        width: 7px;
        background-color: darkgrey;
      }
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.color.orange};
      }
    }
  }
`
