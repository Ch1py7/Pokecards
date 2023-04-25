import styled from 'styled-components'

export const PokemonStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  padding-top: 1rem;
  font-family: 'Minecraft';
  color: #d4d4d4;
  & > *:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  & > *:nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }
  & > *:nth-child(3) {
    grid-row: 3;
    grid-column: 1;
  }
  & > *:nth-child(4) {
    grid-row: 4;
    grid-column: 1;
  }
  & > *:nth-child(5) {
    grid-row: 2;
    grid-column: 2;
  }
  & > *:nth-child(6) {
    grid-row: 3;
    grid-column: 2;
  }
  & > *:nth-child(7) {
    grid-row: 4;
    grid-column: 2;
  }
`

export const PokemonTitle = styled.h3`
  font-size: 1.8rem;
`

export const PokemonDescription = styled.p`
  font-size: 1rem;
`
