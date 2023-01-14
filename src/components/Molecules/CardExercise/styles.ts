import styled from 'styled-components'

export const Container = styled.div`
  hr {
    color: ${(props) => props.theme.color.primary_gray};
    width: 100%;
    margin-left: 15px;
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
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.color.black};
    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }
`
