import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
`

export const ContainerTable = styled.div`
  width: 100%;
`

export const BoxFastFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  select,
  button {
    padding: 6px 12px;
    border: none;
    border: 1px solid #502314;
    border-radius: 4px;

    font-weight: 500;
    font-size: 11.11px;
    line-height: 125%;
    color: #502314;
    background: transparent;
    cursor: pointer;
  }
`

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const BoxRightBar = styled.div`
  display: flex;
`

export const BoxSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .text-field-container {
    margin-right: 3px;
  }

  input {
    box-sizing: border-box;
    width: 288px;
    height: 40px;
    left: 124px;
    top: 133px;
    background: #ffffff;
    border-radius: 4px;
    padding: 5px;
  }

  button {
    box-sizing: border-box;
    width: 48px;
    height: 32px;
    border: none;
    background: #0671e0;
    border-radius: 0px 4px 4px 0px;

    svg {
      width: 16px;
      path {
        fill: #fff;
      }
    }
  }
`

export const ContainerSearchTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h2 {
    font-weight: lighter;
  }
`

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

export const ContainerHeaderTable = styled.div``

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
