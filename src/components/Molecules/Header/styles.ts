import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #b5b5b5;
  padding: 20px 60px;
  position: fixed;
  background: #ffffff;
  top: 0rem;
  left: 0rem;
  z-index: 10;
  width: 100%;
  box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.37);
  @media only screen and (max-width: 450px) {
    padding: 20px 20px;
    width: 100%;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  .title-container {
    display: grid;
    grid-template-columns: 28px 60px;

    h1 {
      font-size: 26px;
      cursor: pointer;
      color: #ffa600ff;
    }
    h2 {
      font-size: 26px;
      cursor: pointer;
      color: #a3a3a3;
    }
  }
`

export const Nav = styled.ul`
  display: flex;
  gap: 20px;
  outline: none;
  @media screen and (max-width: 1180px) {
    display: none;
  }
  a {
    position: relative;
    cursor: pointer;
    font-size: 15px;
    color: gray;
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    &::after {
      content: '';
      position: absolute;
      top: 25px;
      right: 0;
      height: 2px;
      width: 100%;
      color: #000;
      background-color: #000;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.6s;
    }
  }
  nav {
    position: absolute;
    top: 2rem;
    width: 200px;
    height: 10rem;
    background: #fff;
    font-size: 1.2rem;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }
  .navProductsOff {
    nav {
      background: transparent;
      z-index: -1;
      li {
        display: none;
      }
    }
  }
  .navProducts {
    nav {
      border: 1px solid rgb(0, 0, 0, 0.25);
      a {
        display: flex;
        align-items: center;
        width: 100%;
        svg {
          margin-left: auto;
        }
      }
    }
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  > svg {
    font-size: 20px;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    cursor: pointer;
  }
`

export const MenuHamburguer = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
  @media screen and (max-width: 1180px) {
    display: flex;
  }
  .navHamburguer {
    opacity: 0;
    margin-left: 1000px;
    transition: 1s;
  }
  .navTrue {
    width: 100%;
    transition: 1s;
    margin-left: 0px;
    opacity: 1;
  }
  nav {
    position: absolute;
    left: 0rem;
    top: 72px;
    width: 100vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    list-style: none;
    li {
      padding: 0 10px;
      font-size: 1.3rem;
      color: #000;
      height: 50px;
      display: flex;
      align-items: center;
      border-top: 1px solid rgb(0, 0, 0, 0.15);
      &:hover {
        background: rgb(0, 0, 0, 0.05);
      }
      a {
        color: #000;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
