import styled from 'styled-components'

export const Burger = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 7rem;
    height: 50%;
    padding: 0 1rem;
    background: none;
    border: 0;
    cursor: pointer;
  }
`

export const BurguerLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: #387EFF;
`
