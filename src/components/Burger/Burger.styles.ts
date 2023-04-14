import styled from 'styled-components'

export const Burger = styled.div`
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
