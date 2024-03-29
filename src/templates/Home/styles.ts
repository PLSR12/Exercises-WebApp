import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color.background_paper};
  justify-content: flex-start;
`

export const ContainerItems = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.color.background_paper};
`
