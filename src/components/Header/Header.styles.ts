import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  height: 6rem;
  background-color: #1E5DBB;
  gap: 1rem;
  @media (max-width: 750px) {
    padding: 0 2rem;
  }
  @media (max-width: 370px) {
    padding: 0 5px;
  }
`

export const HeaderLogo = styled.div`
  background-image: url(/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 25rem;
  height: 100%;
  @media (max-width: 750px) {
    background-image: url(/logo-s.png);
    width: 7rem;
    height: 4rem;
  }
`

export const HeaderSearch = styled.input`
  width: 25%;
  min-width: 10%;
  height: 50%;
  border: none;
  border-radius: 1rem;
  padding: 4px 2rem;
  color: white;
  background-color: #87A9DB;
  @media (max-width: 750px) {
    width: 70%;
  }
`

export const HeaderBurger = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 5rem;
    height: 50%;
    align-self: center;
    background: none;
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`

export const BurguerLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: #387EFF;
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 6rem;
  @media (max-width: 750px) {
    padding: 2px;
    border-radius: 1rem;
    background-color: #387EFF;
  }
`

export const HeaderSocial = styled.img`
  height: 75%;
  border-radius: 50%;
`
