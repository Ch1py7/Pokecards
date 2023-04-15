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

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  width: 25rem;
  align-items: center;
  height: 6rem;
  gap: 2rem;
  @media (max-width: 750px) {
    width: 13rem;
    padding: 2px;
    border-radius: 1rem;
    background-color: #387EFF;
  }
`

export const HeaderSocial = styled.img`
  height: 4.6rem;
  border-radius: 50%;
`
