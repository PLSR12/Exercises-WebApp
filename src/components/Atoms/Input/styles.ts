import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8px;
  label {
    display: block;
    padding: 0 0 8px 0;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.color.black};
    letter-spacing: 0em;
    text-align: left;
  }
  input {
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
  }

  div {
    color: ${(props) => props.theme.color.red};
    margin: 5px 0 0 5px;
  }
`
