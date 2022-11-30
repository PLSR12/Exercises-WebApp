import styled from 'styled-components'
import { loadingProps } from './types'

export const Container = styled.div<loadingProps>`
  display: ${(props) => (props.loading ? 'block' : 'none')};
  text-align: center;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px;
  border-radius: 2%;
  z-index: 10;
  img {
    width: 50%;
  }
  .loading-text {
    font-size: 24px;
    color: #a3a3a3;
    font-weight: bold;
  }
`
