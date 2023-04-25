import styled from 'styled-components'
import { BoxStyles } from 'styles'

export interface BtnProps {
	color: string
	width: string
	height: string
	marginLeft: string
	marginTop: string
}

export const Case = styled.div`
  display: grid;
  grid-template-columns: 33rem 30rem;
  width: 63rem;
  height: 40rem;
  border-radius: 5px;
  background-color: transparent;
  transform: scale(2);
  @media (max-width: 1260px) {
    transform: scale(1.5);
  }
  @media (max-width: 945px) {
    transform: scale(1.4);
  }
  @media (max-width: 890px) {
    transform: scale(1.2);
  }
  @media (max-width: 760px) {
    transform: scale(0.8);
  }
  @media (max-width: 505px) {
    transform: scale(0.6);
  }
  @media (max-width: 380px) {
    transform: scale(0.5);
  }
  @media (max-width: 315px) {
    transform: scale(0.4);
  }
`

export const CaseLeft = styled.div`
  display: flex;
  border-radius: 5px;
`

export const CaseLeftMain = styled.div`
  width: 30rem;
  height: 100%;
  border-radius: 5px 5px 3px 5px;
  background-color: #dc0a2d;
  box-shadow: inset 4px -4px 0 #a8001c;
`

export const CaseLeftTopWrapper = styled.div`
  filter: drop-shadow(0 4px 0 #810016);
`

export const CaseLeftTop = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px 5px 0 0;
  width: 33rem;
  height: 10rem;
  border: 1px solid #222222;
  border-bottom: none;
  background-color: #dc0a2d;
  -webkit-clip-path: polygon( 0 0, 100% 0, 100% 50px, 195px 50px, 135px 100%, 0 100% );
  clip-path: polygon(0 0, 100% 0, 100% 50px, 195px 50px, 135px 100%, 0 100%);
  & > *:nth-child(1) {
    &:before {
    ${BoxStyles.AbsCenter}
    z-index: -1;
    width: 7rem;
    height: 7rem;
    border: 1px solid #222222;
    border-radius: 50%;
    content: '';
    background-color: #e1e1e0;
  }
  }
`

export const CaseBtn = styled.div<BtnProps>`
  background-color: ${(props) => `#${props.color}`};
  position: relative;
  align-self: flex-start;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  margin-left: ${(props) => `${props.marginLeft}`};
  margin-top: ${(props) => `${props.marginTop}`};
  border-radius: 50%;
  border: 1px solid #222222;
  &:after {
    ${BoxStyles.BtnShine}
  }
`

export const CaseLeftScreen = styled.div`
  height: 21rem;
  padding: 2rem 3.5rem;
`

export const CaseScreenBorderGrey = styled.div`
  display: grid;
  grid-template-rows: 1.8rem 11.2rem 3rem;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  padding: 0 3rem;
  grid-gap: 5px 0;
  background-color: #e1e1e0;
  border-radius: 4px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 90%);
`

export const CaseScreenTopBtn = styled.div`
  ${BoxStyles.CenterFlex}
  padding-top: 5px;
  gap: 2rem;
`

export const CaseScreenBottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 5px;
`

export const CaseBurger = styled.div`
  height: 1.6rem;
  width: 1.8rem;
`

export const CaseBurgerSpan = styled.span`
  display: block;
  height: 2px;
  width: 1.8rem;
  margin-bottom: 2px;
  background-color: #5e5e5e;
`

export const CaseLeftCommands = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9rem;
  border-radius: 0 0 3px 5px;
  padding: 0 2.5rem 2rem;
`

export const CaseCommandsCentral = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  width: 44%;
`

export const CaseBigBlackBtn = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid #222222;
  background-color: #222222;
`

export const CaseLongRedBtn = styled.div`
  height: 6px;
  width: 3.5rem;
  border-radius: 1rem;
  border: 1px solid #222222;
  background-color: #b1001d;
`

export const CaseLongBlueBtn = styled.div`
  height: 6px;
  width: 3.5rem;
  border-radius: 1rem;
  border: 1px solid #222222;
  background-color: #29acff;
  justify-self: flex-end;
`

export const CaseCentralCylinder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  z-index: 1;
  width: 3rem;
  height: 35rem;
  border: 1px solid #810016;
  border-radius: 2px 2px 3px 3px;
  background-image: linear-gradient( to right, #dc0a2d 34%, #ec667d 70%, #dc0a2d );
  box-shadow: 0 2px 3px #0000004d;
`

export const CaseCylinderCentralBlock = styled.div`
  height: 28rem;
  border-top: 2px solid #222222;
  border-bottom: 2px solid #222222;
`

export const CaseRightWrapper = styled.div`
  ${BoxStyles.CenterFlex}
  align-self: flex-end;
  height: 35rem;
  border-radius: 0 0 5px 2px;
  background-color: #810016;
  clip-path: polygon(0 0, 105px 0, 165px 50px, 100% 50px, 100% 100%, 0 100%);
  -webkit-clip-path: polygon( 0 0, 105px 0, 165px 50px, 100% 50px, 100% 100%, 0 100% );
`

export const CaseRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  grid-gap: 1rem 2rem;
  border-radius: 0 0 5px 3px;
  transform: scale(0.98);
  background-color: #dc0a2d;
  padding: 7rem 3.5rem 2rem 3.5rem;
  -webkit-clip-path: polygon( 0 0, 105px 0, 165px 50px, 100% 50px, 100% 100%, 0 100% );
  clip-path: polygon(0 0, 105px 0, 165px 50px, 100% 50px, 100% 100%, 0 100%);
`

export const CaseBlueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column: 1 / 3;
  height: 4rem;
  border: 1px solid #222222;
  border-radius: 3px;
  box-shadow: 0 1px 1px #222222;
  & > *:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
    background-color: #29acff;
  }
  & > *:nth-child(2) {
    grid-row: 1;
    grid-column: 2;
    background-color: #29acff;
  }
  & > *:nth-child(3) {
    grid-row: 1;
    grid-column: 3;
    background-color: #29acff;
  }
  & > *:nth-child(4) {
    grid-row: 1;
    grid-column: 4;
    background-color: #29acff;
  }
  & > *:nth-child(5) {
    grid-row: 1;
    grid-column: 5;
    background-color: #29acff;
  }
  & > *:nth-child(6) {
    grid-row: 2;
    grid-column: 1;
    background-color: #29acff;
  }
  & > *:nth-child(7) {
    grid-row: 2;
    grid-column: 2;
    background-color: #29acff;
  }
  & > *:nth-child(8) {
    grid-row: 2;
    grid-column: 3;
    background-color: #29acff;
  }
  & > *:nth-child(9) {
    grid-row: 2;
    grid-column: 4;
    background-color: #29acff;
  }
  & > *:nth-child(10) {
    grid-row: 2;
    grid-column: 5;
    background-color: #29acff;
  }
`

export const CaseGridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #222222;
  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5) {
    border-bottom: 1px solid #222222;
  }
  &:nth-of-type(5),
  &:nth-of-type(10) {
    border-right: 0px;
  }
`

export const CaseLongBtnRight = styled.div`
  display: flex;
  justify-self: flex-end;
  grid-column: 2;
  gap: 5px;
`

export const CaseLongBtnRightCh = styled.div`
  height: 6px;
  width: 3.4rem;
  border-radius: 10px;
  background-color: #222222;
`
