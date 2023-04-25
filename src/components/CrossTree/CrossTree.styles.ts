import styled from 'styled-components'
import { BoxStyles } from 'styles'

export const CrossTree = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: #222222;
  clip-path: polygon( 20px 0, 40px 0, 40px 20px, 60px 20px, 60px 40px, 40px 40px, 40px 60px, 20px 60px, 20px 40px, 0 40px, 0 20px, 20px 20px, );
  -webkit-clip-path: polygon( 20px 0, 40px 0, 40px 20px, 60px 20px, 60px 40px, 40px 40px, 40px 60px, 20px 60px, 20px 40px, 0 40px, 0 20px, 20px 20px, 20px 0 );
  &:after {
    ${BoxStyles.AbsCenter}
    width: 1rem;
    height: 1rem;
    border: 1px solid #131313;
    border-radius: 50%;
    content: "";
  }
  & > *:nth-child(1) {
    top: 1%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  & > *:nth-child(2) {
    top: 69%;
    left: 85%;
    transform: translate(-50%, -100%);
  }
  & > *:nth-child(3) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  & > *:nth-child(4) {
    top: 69%;
    left: 15%;
    transform: translate(-50%, -100%);
  }
  `

export const CrosstreeBtn = styled.button`
  position: absolute;
  border: none;
  background-color: #222222;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:nth-child(2) > svg {
    transform: rotate(90deg);
  }
  &:nth-child(3) > svg {
    transform: rotate(180deg);
  }
  &:nth-child(4) > svg {
    transform: rotate(270deg);
  }
`
