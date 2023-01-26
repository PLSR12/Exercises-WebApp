import styled from 'styled-components'

export const Container = styled.div``

export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
  background: ${(props) => props.theme.color.orange};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;

  p {
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    margin-right: 20px;
  }

  svg {
    margin: 0 10px;
  }

  &:hover {
    opacity: 0.8;
    p {
      color: ${(props) => props.theme.color.black};
    }

    svg {
      path {
        fill: ${(props) => props.theme.color.black};
      }
    }
  }
`
