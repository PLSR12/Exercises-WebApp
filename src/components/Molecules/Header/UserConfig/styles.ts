import styled from 'styled-components'

export const Container = styled.div``

export const ThumbUserLogged = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 6px;

  background-color: #e9ffe2;
  border-radius: 50%;
  border: none;
  border: 1px solid #c4cdd5;
  cursor: pointer;

  p {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.color.black};
  }

  &:hover {
    background-color: #d0e9c8;
  }
`

export const NavProfileOpitions = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 250px;
  left: calc(100% - 270px);
  top: calc(100% + 5px);
  background: #fefefe;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: 0px 0px 48px -5px rgb(0 0 0 / 25%);
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  z-index: 100;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  & a:hover,
  .btnLogout:hover {
    background: ${(props) => props.theme.color.black};

    svg {
      path {
        fill: #fff;
      }
    }

    p {
      color: #fff;
    }
  }
`

export const HeaderProfile = styled.div`
  border-bottom: 1px solid #f4f6f8;
  padding: 16px;

  h4 {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    font-size: 13px;
    color: #454f5b;
    margin-bottom: 8px;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.small};
    color: #919eab;
  }
`

export const BodyProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;

  a {
    display: flex;
    align-items: center;
    flex: 1;
    border: none;
    padding: 10px 16px;
    cursor: pointer;

    p {
      font-weight: ${(props) => props.theme.fontWeight.medium};
      font-size: ${(props) => props.theme.fontSize.medium};
      color: #454f5b;
      padding-left: 6px;
    }
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: 10px 16px;
    opacity: 0.5;
    cursor: not-allowed;

    p {
      font-weight: ${(props) => props.theme.fontWeight.medium};
      font-size: ${(props) => props.theme.fontSize.medium};
      color: #454f5b;
      padding-left: 6px;
    }
  }
`

export const FooterProfile = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #f4f6f8;
  padding: 8px 0;

  button {
    display: flex;
    align-items: center;
    flex: 1;
    padding-right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 16px;

    p {
      font-weight: ${(props) => props.theme.fontWeight.medium};
      font-size: ${(props) => props.theme.fontSize.medium};
      color: #454f5b;
      padding-left: 6px;
    }
  }
`
