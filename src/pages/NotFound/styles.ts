import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.color};
  }
`
