import styled from 'styled-components'
import { BoxStyles } from 'styles'

export const GreenScreen = styled.div`
  ${BoxStyles.CenterFlex}
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  border: 1px solid #222222;
  border-radius: 3px;
  background-color: #51ae5e;
`

export const PokemonName = styled.h2`
  font-family: 'Minecraft';
  color: #121212;
  text-align: center;
  text-transform: capitalize;
`
